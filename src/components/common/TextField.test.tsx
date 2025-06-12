import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/theme';
import { TextField } from './TextField';

// Helper function to render with theme
const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('TextField', () => {
  it('renders with label and placeholder', () => {
    renderWithTheme(<TextField label="Email" placeholder="Enter your email" />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter your email/i)
    ).toBeInTheDocument();
  });

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    renderWithTheme(<TextField label="Name" onChange={handleChange} />);

    const input = screen.getByLabelText(/name/i);
    fireEvent.change(input, { target: { value: 'John Doe' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('displays error state with helper text', () => {
    renderWithTheme(
      <TextField
        label="Email"
        error={true}
        helperText="Please enter a valid email"
      />
    );

    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
  });

  it('renders as disabled when disabled prop is true', () => {
    renderWithTheme(<TextField label="Disabled Field" disabled />);

    const input = screen.getByLabelText(/disabled field/i);
    expect(input).toBeDisabled();
  });

  it('renders as required when required prop is true', () => {
    renderWithTheme(<TextField label="Required Field" required />);

    const input = screen.getByLabelText(/required field/i);
    expect(input).toBeRequired();
  });

  it('renders with different sizes', () => {
    renderWithTheme(<TextField label="Small Field" size="small" />);

    const input = screen.getByLabelText(/small field/i);
    expect(input).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    renderWithTheme(<TextField label="Outlined Field" variant="outlined" />);

    const input = screen.getByLabelText(/outlined field/i);
    expect(input).toBeInTheDocument();
  });

  it('handles multiline text area', () => {
    renderWithTheme(
      <TextField
        label="Description"
        multiline
        rows={4}
        placeholder="Enter description"
      />
    );

    const textarea = screen.getByLabelText(/description/i);
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('renders with start and end adornments', () => {
    const StartAdornment = () => <span data-testid="start-adornment">@</span>;
    const EndAdornment = () => <span data-testid="end-adornment">.com</span>;

    renderWithTheme(
      <TextField
        label="Username"
        startAdornment={<StartAdornment />}
        endAdornment={<EndAdornment />}
      />
    );

    expect(screen.getByTestId('start-adornment')).toBeInTheDocument();
    expect(screen.getByTestId('end-adornment')).toBeInTheDocument();
  });
});
