import { render, screen, fireEvent } from '@testing-library/react';
import ReservationsPage from '../ReservationsPage';
import { useAuth } from '../../contexts/AuthContext';
import { vi, test, beforeEach, expect } from 'vitest';
vi.mock('../contexts/AuthContext');

beforeEach(() => {
  useAuth.mockReturnValue({ user: { name: 'Adnan', email: 'adnan@test.com' } });
});

test('renders reservation form with prefilled user data', () => {
  render(<ReservationsPage />);
  expect(screen.getByLabelText(/Name/i)).toHaveValue('Adnan');
  expect(screen.getByLabelText(/Email/i)).toHaveValue('adnan@test.com');
});

test('shows alert if table not selected', () => {
  window.alert = vi.fn();
  render(<ReservationsPage />);
  fireEvent.submit(screen.getByRole('form'));
  expect(window.alert).toHaveBeenCalledWith('Please select a table type!');
});
