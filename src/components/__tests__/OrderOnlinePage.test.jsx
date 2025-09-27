import { render, screen, fireEvent } from '@testing-library/react';
import OrderOnlinePage from '../OrderOnlinePage';
import { useCart } from '../contexts/CartContext';
import { vi, test, beforeEach, expect } from 'vitest';
vi.mock('../contexts/CartContext');

const mockAddToCart = vi.fn();

beforeEach(() => {
  useCart.mockReturnValue({ addToCart: mockAddToCart });
});

test('renders menu items', () => {
  render(<OrderOnlinePage />);
  expect(screen.getByText(/Greek Salad/i)).toBeInTheDocument();
  expect(screen.getByText(/Bruschetta/i)).toBeInTheDocument();
});

test('adds item to cart on button click', () => {
  render(<OrderOnlinePage />);
  fireEvent.click(screen.getAllByText(/Add to Cart/i)[0]);
  expect(mockAddToCart).toHaveBeenCalled();
});
