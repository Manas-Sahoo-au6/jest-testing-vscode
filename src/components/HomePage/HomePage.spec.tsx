import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Home from './HomePage';

describe('Home Component', () => {
  test('renders initial count and updates on button clicks', () => {
    render(<Home />);

    // Check initial render
    expect(screen.getByText('Welcome to the Home Page')).toBeDefined();
    expect(screen.getByText('Current Count: 0')).toBeDefined();

    // Click increment
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Current Count: 1')).toBeDefined();

    // Click decrement
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText('Current Count: 0')).toBeDefined();
  });
});
