import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './LoginForm';

test('LoginForm component renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    );

    // when
    const form = screen.getByTestId('form');
    const loginButton = screen.getByTestId('login-button');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    // then
    expect(form).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});