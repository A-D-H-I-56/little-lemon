import { render, screen, fireEvent } from '@testing-library/react';
import OrderOnlinePage from '../OrderOnlinePage';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { vi, test, beforeEach, expect } from 'vitest';
vi.mock('../../contexts/CartContext');
vi.mock('../../contexts/AuthContext');

const mockAddToCart = vi.fn();

beforeEach(() => {
  useCart.mockReturnValue({ addToCart: mockAddToCart });
  useAuth.mockReturnValue({ user: { name: 'Test' } });
});

test('renders menu items', () => {
  render(<OrderOnlinePage />);
  expect(screen.getAllByText(/Greek Salad/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Bruschetta/i).length).toBeGreaterThan(0);
});

test('adds item to cart on button click', () => {
  render(<OrderOnlinePage />);
  fireEvent.click(screen.getAllByText(/Add to Cart/i)[0]);
  expect(mockAddToCart).toHaveBeenCalled();
});
