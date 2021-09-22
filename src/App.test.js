import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/add data/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders with params', () => {
  render(<App hideChartGenerator={true}/>);
  const linkElement = screen.getByText(/add data/i);
  expect(linkElement).toBeInTheDocument();
  const noChartGen = screen.queryByText(/Generate graphs/i);
  expect(noChartGen).toBeNull();
});