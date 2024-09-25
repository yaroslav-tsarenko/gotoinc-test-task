import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RequestTypeForm from "./RequestTypeForm";

test('RegistrationForm component renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <RequestTypeForm />
        </MemoryRouter>
    );

    // when
    const requestTypeForm = screen.getByTestId('request-type-form');
    const title = screen.getByTestId('title');
    const buttonGroup = screen.getByTestId('button-group');

    // then
    expect(requestTypeForm).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(buttonGroup).toBeInTheDocument();
});