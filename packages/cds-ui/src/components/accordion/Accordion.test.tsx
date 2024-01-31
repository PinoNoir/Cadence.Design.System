import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

describe('Accordion Component Tests', () => {
  test('renders Accordion without crashing', () => {
    render(
      <Accordion>
        <AccordionItem open={true} id="item1" title="Item 1" description="Description 1">
          <div>Content 1</div>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  test('default open item based on open prop', () => {
    render(
      <Accordion>
        <AccordionItem open={true} id="item1" title="Item 1" description="Description 1">
          <div>Content 1</div>
        </AccordionItem>
        <AccordionItem open={false} id="item2" title="Item 2" description="Description 2">
          <div>Content 2</div>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.getByText('Content 1')).toBeVisible();
  });

  test('toggles accordion items', async () => {
    render(
      <Accordion>
        <AccordionItem open={false} id="item1" title="Item 1" description="Description 1">
          <div>Content 1</div>
        </AccordionItem>
        <AccordionItem open={false} id="item2" title="Item 2" description="Description 2">
          <div>Content 2</div>
        </AccordionItem>
      </Accordion>,
    );

    // Make sure you are clicking the correct element
    const firstItemToggleButton = screen.getByText('Item 1').closest('div');
    fireEvent.click(firstItemToggleButton);

    // Check for visibility if the content is hidden, not removed
    expect(await screen.findByText('Content 1')).toBeVisible();

    const secondItemToggleButton = screen.getByText('Item 2').closest('div');
    fireEvent.click(secondItemToggleButton);

    expect(await screen.findByText('Content 2')).toBeVisible();
    // If the content is hidden instead of removed, use toBeVisible/not.toBeVisible
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });
});
