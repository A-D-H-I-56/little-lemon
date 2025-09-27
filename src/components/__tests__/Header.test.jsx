import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { MemoryRouter } from 'react-router-dom';
import { vi, test, beforeEach, expect } from 'vitest';

vi.mock('../contexts/AuthContext');
vi.mock('../contexts/CartContext');

const mockLogout = vi.fn();
const mockSetShowCart = vi.fn();

beforeEach(() => {
  useAuth.mockReturnValue({ user: null, logout: mockLogout });
  useCart.mockReturnValue({ cart: [], setShowCart: mockSetShowCart });
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
  useAuth.mockReturnValueOnce({ user: { name: 'Adnan' }, logout: mockLogout });
  render(<MemoryRouter><Header /></MemoryRouter>);
  expect(screen.getByText(/Adnan/i)).toBeInTheDocument();
});

test('cart button opens cart', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  fireEvent.click(screen.getByLabelText(/cart/i));
  expect(mockSetShowCart).toHaveBeenCalledWith(true);
});
