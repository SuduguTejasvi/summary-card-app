import React from 'react';
import { render, screen } from '@testing-library/react';
import TypeModule from '.';

describe('TypeModule Component', () => {
  const texts = ['Subtitle 1 Text 1', 'Heading 6 Text 1', 'Subtitle 1 Text 2', 'Heading 6 Text 2'];

  test('renders TypeModule component with correct text content', () => {
    render(<TypeModule texts={texts} />);
    expect(screen.getByText('Subtitle 1 Text 1')).toBeInTheDocument();
    expect(screen.getByText('Heading 6 Text 1')).toBeInTheDocument();
    expect(screen.getByText('Subtitle 1 Text 2')).toBeInTheDocument();
    expect(screen.getByText('Heading 6 Text 2')).toBeInTheDocument();
  });


  test('renders TypeModule component with correct text variants', () => {
    render(<TypeModule texts={texts} />);
    expect(screen.getByText('Subtitle 1 Text 1')).toHaveClass('MuiTypography-subtitle1');
    expect(screen.getByText('Heading 6 Text 1')).toHaveClass('MuiTypography-h6');
    expect(screen.getByText('Subtitle 1 Text 2')).toHaveClass('MuiTypography-subtitle1');
    expect(screen.getByText('Heading 6 Text 2')).toHaveClass('MuiTypography-h6');
  });
});
