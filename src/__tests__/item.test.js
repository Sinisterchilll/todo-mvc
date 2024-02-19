import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Item } from '../todo/components/item';

describe('Item Component', () => {
  const todo = { id: 1, title: 'Test Todo', completed: false };
  const dispatchMock = jest.fn();

  test('renders item correctly', () => {
    render(<Item todo={todo} dispatch={dispatchMock} />);
    const itemElement = screen.getByTestId('todo-item');
    expect(itemElement).toBeInTheDocument();
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByTestId('todo-item-toggle')).not.toBeChecked();
  });

  test('toggles completion status when checkbox is clicked', () => {
    render(<Item todo={todo} dispatch={dispatchMock} />);
    const checkboxElement = screen.getByTestId('todo-item-toggle');
    fireEvent.click(checkboxElement);
    expect(dispatchMock).toHaveBeenCalledWith({ type: 'TOGGLE_ITEM', payload: { id: 1 } });
  });

  test('removes item when remove button is clicked', () => {
    render(<Item todo={todo} dispatch={dispatchMock} />);
    const removeButton = screen.getByTestId('todo-item-button');
    fireEvent.click(removeButton);
    expect(dispatchMock).toHaveBeenCalledWith({ type: 'REMOVE_ITEM', payload: { id: 1 } });
  });
});
