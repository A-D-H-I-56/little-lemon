import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '../Cart';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { vi, test, beforeEach, expect } from 'vitest';
vi.mock('../../contexts/AuthContext');
vi.mock('../../contexts/CartContext');

const mockSetShowCart = vi.fn();
const mockUpdateQuantity = vi.fn();
const mockRemoveFromCart = vi.fn();

beforeEach(() => {
  useAuth.mockReturnValue({ user: { name: 'Adnan', email: 'adnan@test.com' } });
  useCart.mockReturnValue({
    cart: [],
    showCart: true,
    setShowCart: mockSetShowCart,
    updateQuantity: mockUpdateQuantity,
    removeFromCart: mockRemoveFromCart
  });
});

test('renders empty cart message', () => {
  render(<Cart />);
  expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
});

test('renders cart items and updates quantity', () => {
  useCart.mockReturnValueOnce({
    cart: [{ id: 1, name: 'Greek Salad', price: 12.99, quantity: 1 }],
    showCart: true,
    setShowCart: mockSetShowCart,
    updateQuantity: mockUpdateQuantity,
    removeFromCart: mockRemoveFromCart
  });

  render(<Cart />);
  expect(screen.getByText(/Greek Salad/i)).toBeInTheDocument();
  const plusButtons = screen.getAllByText('+');
  fireEvent.click(plusButtons[0]);
  expect(mockUpdateQuantity).toHaveBeenCalled();
});
