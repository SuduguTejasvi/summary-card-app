import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { Text } from '.'; 

describe('Text Component Tests', () => {
    test('renders text with subtitle1 variant and content', () => {
        render(<Text variant="subtitle1" text="selected of $880,000.00" />);
        const element = screen.getByText(/selected of \$880,000\.00/i); 
        expect(element).toBeInTheDocument();
    });

    test('renders text with h4 variant and content', () => {
        render(<Text variant="h4" text="Summary" />);
        const element = screen.getByText(/Summary/i);
        expect(element).toBeInTheDocument();
    });

    test('renders text with h6 variant and content', () => {
        render(<Text variant="h6" text="Slide to autoselect" />);
        const element = screen.getByText(/Slide to autoselect/i);
        expect(element).toBeInTheDocument();
    });
});
