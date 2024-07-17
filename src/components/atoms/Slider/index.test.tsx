import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM extensions
import SliderComponent from '.';

describe('SliderComponent Tests', () => {
    const mockOnChange = jest.fn();
    test('renders slider with default values', () => {
        render(<SliderComponent value={0} onChange={mockOnChange} />);
        const sliderElement = screen.getByRole('slider');
        expect(sliderElement).toBeInTheDocument();
        expect(sliderElement).toHaveAttribute('min', '0');
        expect(sliderElement).toHaveAttribute('max', '880000');
    });

    test('ensures slider boundary values work correctly', () => {
        render(<SliderComponent value={0} onChange={mockOnChange} />);
        const sliderElement = screen.getByRole('slider');
        fireEvent.change(sliderElement, { target: { value: 880000 } });
        expect(mockOnChange).toHaveBeenCalledTimes(1); 
    });
    test('ensure slider value changes',()=>{
        render(<SliderComponent value={0} onChange={mockOnChange} />);
        const sliderElement=screen.getByRole('slider');
        fireEvent.change(sliderElement,{target:{value:100000}});
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    })
});
