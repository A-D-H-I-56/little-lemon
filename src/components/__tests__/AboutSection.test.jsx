import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from '../AboutSection';
import {  test,  expect } from 'vitest';

test('renders AboutSection with title, description and images', () => {
  const { container } = render(<AboutSection />);
  
  expect(screen.getAllByText(/Little Lemon/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Chicago/i)).toBeInTheDocument();
  expect(screen.getByText(/charming neighborhood bistro/i)).toBeInTheDocument();
  expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(2);
});
