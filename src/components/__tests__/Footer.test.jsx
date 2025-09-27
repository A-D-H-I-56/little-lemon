import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import {  test,  expect } from 'vitest';
test('renders footer navigation links', () => {
  render(<Footer />);
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Menu/i)).toBeInTheDocument();
  expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
});
