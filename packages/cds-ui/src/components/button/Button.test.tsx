import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('should render', () => {
    render(
      <Button variant="primary" role="button" aria-label="test-label" id="test-id" name="test-name">
        Label
      </Button>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should only propagate click events from the input', async () => {
    const onClick = jest.fn();
    render(
      <Button variant="primary" role="button" aria-label="test-label" id="test-id" name="test-name" onClick={onClick}>
        Label
      </Button>,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
