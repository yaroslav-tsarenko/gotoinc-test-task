import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

test('RegistrationForm component renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <RegistrationForm />
        </MemoryRouter>
    );

    // when
    const registrationForm = screen.getByTestId('registration-form');
    const usernameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginLink = screen.getByTestId('login-link');
    const registerButton = screen.getByTestId('register-button');

    // then
    expect(registrationForm).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
});