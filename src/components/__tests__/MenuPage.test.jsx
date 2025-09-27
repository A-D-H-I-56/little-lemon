import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import MenuPage from '../MenuPage';
import { test,expect } from 'vitest';
test('renders menu items with name and description', () => {
  render(<MenuPage />);
  expect(screen.queryAllByText(/Greek Salad/i).length).toBeGreaterThan(0);
  expect(screen.queryAllByText(/Feta Cheese/i).length).toBeGreaterThan(0);
  expect(screen.queryAllByText(/Bruschetta/i).length).toBeGreaterThan(0);
});
