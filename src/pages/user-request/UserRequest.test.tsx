import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserRequest from "./UserRequest";

test('UserRequest page renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <UserRequest />
        </MemoryRouter>
    );

    // when
    const usersRequestPage = screen.getByTestId('users-requests-page');

    // then
    expect(usersRequestPage).toBeInTheDocument();
});