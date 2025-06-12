import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppTabs } from './Tabs';

describe('AppTabs', () => {
  const mockOnClick = jest.fn();
  const mockLabels = ['Tab 1', 'Tab 2', 'Tab 3'];

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('renders tabs with labels', () => {
    render(
      <AppTabs
        labels={mockLabels}
        onClick={mockOnClick}
        selectedLabel="Tab 1"
      />
    );

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('calls onClick when tab is clicked', () => {
    render(
      <AppTabs
        labels={mockLabels}
        onClick={mockOnClick}
        selectedLabel="Tab 1"
      />
    );

    fireEvent.click(screen.getByText('Tab 2'));
    expect(mockOnClick).toHaveBeenCalledWith('Tab 2');
  });

  it('displays count when provided', () => {
    const mockCount = [
      { label: 'Tab 1', value: 5 },
      { label: 'Tab 2', value: 10 },
    ];

    render(
      <AppTabs
        labels={mockLabels}
        onClick={mockOnClick}
        selectedLabel="Tab 1"
        count={mockCount}
      />
    );

    expect(screen.getByText('Tab 1 (5)')).toBeInTheDocument();
    expect(screen.getByText('Tab 2 (10)')).toBeInTheDocument();
  });

  it('renders disabled state correctly', () => {
    render(
      <AppTabs
        labels={mockLabels}
        onClick={mockOnClick}
        selectedLabel="Tab 1"
        isDisabled={true}
      />
    );

    const tab = screen.getByText('Tab 1');
    expect(tab).toBeInTheDocument();
  });
});
