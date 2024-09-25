import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from "./Home";

test('Home page renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );

    // when
    const homePage = screen.getByTestId('home-page');

    // then
    expect(homePage).toBeInTheDocument();
});