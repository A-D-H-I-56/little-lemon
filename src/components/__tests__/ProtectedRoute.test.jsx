import { render, screen } from '@testing-library/react';
import ProtectedRoute from '../ProtectedRoute';
import { useAuth } from '../contexts/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { vi, test,  expect } from 'vitest';
vi.mock('../contexts/AuthContext');

test('renders children if user is authenticated', () => {
  useAuth.mockReturnValue({ user: { name: 'Adnan' } });
  render(
    <MemoryRouter>
      <ProtectedRoute><div>Secret Content</div></ProtectedRoute>
    </MemoryRouter>
  );
  expect(screen.getByText(/Secret Content/i)).toBeInTheDocument();
});

test('redirects to login if not authenticated', () => {
  useAuth.mockReturnValue({ user: null });
  render(
    <MemoryRouter>
      <ProtectedRoute><div>Secret Content</div></ProtectedRoute>
    </MemoryRouter>
  );
  expect(screen.queryByText(/Secret Content/i)).not.toBeInTheDocument();
});
