import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from "./Login";

test('Login page renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    // when
    const loginPage = screen.getByTestId('login-page');

    // then
    expect(loginPage).toBeInTheDocument();
});