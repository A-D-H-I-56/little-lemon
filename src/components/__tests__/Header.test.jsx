import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { MemoryRouter } from 'react-router-dom';
import { vi, test, beforeEach, expect } from 'vitest';

vi.mock('../../contexts/AuthContext');
vi.mock('../../contexts/CartContext');

const mockLogout = vi.fn();
const mockSetShowCart = vi.fn();

beforeEach(() => {
  useAuth.mockReturnValue({ user: null, logout: mockLogout, isAuthenticated: () => false });
  useCart.mockReturnValue({ getCartItemCount: () => 0, showCart: false, setShowCart: mockSetShowCart });
});

test('renders navigation links', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Menu/i)).toBeInTheDocument();
});

test('shows login link when no user', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test('shows user menu when logged in', () => {
  useAuth.mockReturnValue({ user: { name: 'Adnan', email: 'a@a.com' }, logout: mockLogout, isAuthenticated: () => true });
  render(<MemoryRouter><Header /></MemoryRouter>);
  const profileBtn = screen.getByTitle(/Profile/i);
  fireEvent.click(profileBtn);
  // Dropdown contains user name or email
  expect(screen.getAllByText(/Adnan|a@a.com/i).length).toBeGreaterThan(0);
});

test('cart button toggles cart', () => {
  useAuth.mockReturnValueOnce({ user: { name: 'U' }, logout: mockLogout, isAuthenticated: () => true });
  useCart.mockReturnValueOnce({ getCartItemCount: () => 0, showCart: false, setShowCart: mockSetShowCart });
  render(<MemoryRouter><Header /></MemoryRouter>);
  const cartButton = screen.getByTitle(/Shopping Cart/i);
  fireEvent.click(cartButton);
  expect(mockSetShowCart).toHaveBeenCalledWith(true);
});
