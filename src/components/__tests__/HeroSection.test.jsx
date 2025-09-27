import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { useNavigate } from 'react-router-dom';
import HeroSection from '../HeroSection';
import { vi, test,  expect } from 'vitest';
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn()
}));

test('renders hero text and button', () => {
  render(<HeroSection />);
  expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Reserve a Table/i })).toBeInTheDocument();
});

test('navigates to reservations on button click', () => {
  const mockNavigate = vi.fn();
  useNavigate.mockReturnValue(mockNavigate);

  render(<HeroSection />);
  fireEvent.click(screen.getByRole('button', { name: /Reserve a Table/i }));
  expect(mockNavigate).toHaveBeenCalledWith('/reservations');
});
