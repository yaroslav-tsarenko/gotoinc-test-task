import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter to wrap the component
import DashboardLayout from './DashboardLayout';

test('DashboardLayout component renders with all elements', () => {
    //before
    render(
        <BrowserRouter>
            <DashboardLayout />
        </BrowserRouter>
    );

    //when
    const dashboard = screen.getByTestId('dashboard');
    const sidebar = screen.getByTestId('sidebar');
    const title = screen.getByTestId('title');

    //then
    expect(dashboard).toBeInTheDocument();
    expect(sidebar).toBeInTheDocument();
    expect(title).toBeInTheDocument();
});
