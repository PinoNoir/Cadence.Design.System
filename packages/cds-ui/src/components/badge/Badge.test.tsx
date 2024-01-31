import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge Component', () => {
  it('renders the Badge component with the correct text', () => {
    render(<Badge variant="default">Test Label</Badge>);
    const badgeElement = screen.getByText(/Test Label/i);
    expect(badgeElement).toBeInTheDocument();
  });
});
