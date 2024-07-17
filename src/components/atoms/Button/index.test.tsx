import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import CustomButton from "."; // Assuming this is the correct import path
import { CustomButtonProps } from '../../../utils/interface';

describe('Test the CustomButton component', () => {
    const defaultProps: CustomButtonProps = {
        label: 'REVIEW YOUR CREDIT',
        disabled: false,
        type: 'contained',
        onClick: jest.fn(),
    };

    test('renders button with correct label', () => {
        render(<CustomButton {...defaultProps} />);
        const buttonElement = screen.getByText(/REVIEW YOUR CREDIT/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('calls onClick handler when button is clicked', () => {
        render(<CustomButton {...defaultProps} />);
        const buttonElement = screen.getByText(/REVIEW YOUR CREDIT/i);
        fireEvent.click(buttonElement);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    test('does not call onClick handler when button is disabled', () => {
        render(<CustomButton {...defaultProps} disabled={true} />);
        const buttonElement = screen.getByText(/REVIEW YOUR CREDIT/i);
        fireEvent.click(buttonElement);
        expect(defaultProps.onClick).not.toHaveBeenCalled();
    });
});
