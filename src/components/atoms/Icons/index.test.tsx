import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM extensions
import { Icon } from "."; // Assuming correct import path
import { IconProps } from '../../../utils/interface';

describe('Icon Component Tests', () => {
    const defaultProps: IconProps = {
        source: "/assets/images/info-circle.svg", 
        alternateText: "Information Icon", 
    };

    test('renders icon with correct source and alt text', () => {
        render(<Icon {...defaultProps} />);
        const iconElement = screen.getByRole('img');
        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveAttribute('src', defaultProps.source);
        expect(iconElement).toHaveAttribute('alt', defaultProps.alternateText);
    });
});
