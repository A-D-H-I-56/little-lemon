import { render, screen, fireEvent } from '@testing-library/react';
import ReservationsPage from '../ReservationsPage';
import { useAuth } from '../../contexts/AuthContext';
import { vi, test, beforeEach, expect } from 'vitest';

vi.mock('../../contexts/AuthContext');

beforeEach(() => {
  useAuth.mockReturnValue({ user: { name: 'Adnan', email: 'adnan@test.com' } });
  window.alert = vi.fn(); // reset alert mock
});

test('renders reservation form with prefilled user data', () => {
  render(<ReservationsPage />);
  expect(screen.getByLabelText(/Name/i)).toHaveValue('Adnan');
  expect(screen.getByLabelText(/Email/i)).toHaveValue('adnan@test.com');
});

test('shows alert if table not selected', () => {
  render(<ReservationsPage />);

  // fill required fields
  fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '123456789' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-10-05' } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:00' } });

  // click submit without selecting a table
  fireEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

  expect(window.alert).toHaveBeenCalledWith('Please select a table type!');
});
