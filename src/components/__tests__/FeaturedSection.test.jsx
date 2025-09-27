import { render, screen, fireEvent } from '@testing-library/react';


import FeaturedSection from '../FeaturedSection';
import { vi,test,  expect } from 'vitest';
test('renders featured dishes', () => {
  render(<FeaturedSection />);
  expect(screen.getByText(/Greek Salad/i)).toBeInTheDocument();
  expect(screen.getByText(/Bruschetta/i)).toBeInTheDocument();
  expect(screen.getByText(/Lemon Dessert/i)).toBeInTheDocument();
});

test('order button shows alert', () => {
  window.alert = vi.fn();
  render(<FeaturedSection />);
  fireEvent.click(screen.getByText(/Order Delivery/i));
  expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('Ding🔔! Your order is now being prepared'));
});
