import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../LoginPage';
import { useAuth } from '../../contexts/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { vi, test, beforeEach, expect } from 'vitest';
vi.mock('../../contexts/AuthContext');

beforeEach(() => {
  useAuth.mockReturnValue({
    login: vi.fn(),
    register: vi.fn()
  });
});

test('renders login form by default', () => {
  render(<MemoryRouter><LoginPage /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: /Login/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
});

test('switches to register form', () => {
  render(<MemoryRouter><LoginPage /></MemoryRouter>);
  fireEvent.click(screen.getByText(/Register/i));
  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
});
