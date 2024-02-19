import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Header } from '../todo/components/header';

const mockDispatch = jest.fn();

describe('Header Component', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test('renders header correctly', () => {
    render(<Header dispatch={mockDispatch} />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
