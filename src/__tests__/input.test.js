import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../todo/components/input';

describe('Input Component', () => {
  test('renders input element with provided props', () => {
    render(<Input onSubmit={jest.fn()} placeholder="Test Placeholder" label="Test Label" defaultValue="Default Value" />);
    const inputElement = screen.getByPlaceholderText('Test Placeholder');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('Default Value');
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  test('calls onSubmit function with sanitized input value on pressing Enter', () => {
    const mockSubmit = jest.fn();
    render(<Input onSubmit={mockSubmit} placeholder="Test Placeholder" label="Test Label" />);
    const inputElement = screen.getByPlaceholderText('Test Placeholder');
    fireEvent.change(inputElement, { target: { value: 'Test Input' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    expect(mockSubmit).toHaveBeenCalledWith('Test Input');
  });

  test('does not call onSubmit function on pressing Enter with invalid input length', () => {
    const mockSubmit = jest.fn();
    render(<Input onSubmit={mockSubmit} placeholder="Test Placeholder" label="Test Label" />);
    const inputElement = screen.getByPlaceholderText('Test Placeholder');
    fireEvent.change(inputElement, { target: { value: 'T' } }); // Less than minimum length (2)
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test('calls onBlur callback when input loses focus', () => {
    const mockBlur = jest.fn();
    render(<Input onSubmit={jest.fn()} onBlur={mockBlur} />);
    const inputElement = screen.getByTestId('text-input');
    fireEvent.blur(inputElement);
    expect(mockBlur).toHaveBeenCalled();
  });
});
