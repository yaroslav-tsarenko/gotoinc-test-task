import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreateRequest from "./CreateRequest";

test('CreateRequest page renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <CreateRequest />
        </MemoryRouter>
    );

    // when
    const createRequest = screen.getByTestId('request-type-form-page');

    // then
    expect(createRequest).toBeInTheDocument();
});