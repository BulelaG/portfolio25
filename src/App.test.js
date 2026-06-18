import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(screen.getByText(/hi, i'm bulela/i)).toBeInTheDocument();
});

test('toggles the portfolio theme', () => {
  localStorage.clear();
  render(<App />);

  expect(document.documentElement.dataset.theme).toBe('midnight');
  fireEvent.click(screen.getByRole('button', { name: /switch to solar theme/i }));
  expect(document.documentElement.dataset.theme).toBe('solar');
  expect(document.body.dataset.theme).toBe('solar');
  expect(localStorage.getItem('portfolio-theme')).toBe('solar');
  expect(screen.getByRole('button', { name: /switch to midnight theme/i })).toBeInTheDocument();
});
