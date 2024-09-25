import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from "./Register";

test('Register page renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <Register />
        </MemoryRouter>
    );

    // when
    const registerPage = screen.getByTestId('register-page');

    // then
    expect(registerPage).toBeInTheDocument();
});