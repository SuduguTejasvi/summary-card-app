import React from 'react';
import { render, screen } from '@testing-library/react';
import SummaryTitle from '.';

describe('SummaryTitle Component', () => {
  const props = {
    text: 'Summary Title',
    source: '/path/to/icon.svg',
    alternateText: 'Icon Alt Text',
  };

  test('renders SummaryTitle component with correct text', () => {
    render(<SummaryTitle {...props} />);
    const titleElement = screen.getByText('Summary Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders SummaryTitle component with correct icon', () => {
    render(<SummaryTitle {...props} />);
    const iconElement = screen.getByRole('img');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', '/path/to/icon.svg');
    expect(iconElement).toHaveAttribute('alt', 'Icon Alt Text');
  });

});
