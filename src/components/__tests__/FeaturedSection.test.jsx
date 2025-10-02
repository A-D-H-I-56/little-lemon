import { render, screen } from '@testing-library/react';
import FeaturedSection from '../FeaturedSection';
import { test, expect } from 'vitest';

test('renders featured dishes', () => {
  render(<FeaturedSection />);
  // use getAllByText to avoid multiple matches for repeated strings
  expect(screen.getAllByText(/Greek Salad/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Bruschetta/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Lemon Desert|Lemon Dessert/i).length).toBeGreaterThan(0);
});
