import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from '../AboutSection';
import {  test,  expect } from 'vitest';

test('renders AboutSection with title and description', () => {
  render(<AboutSection />);
  
  expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument();
  expect(screen.getByText(/Chicago/i)).toBeInTheDocument();
  expect(screen.getByText(/charming neighborhood bistro/i)).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(2);
});
