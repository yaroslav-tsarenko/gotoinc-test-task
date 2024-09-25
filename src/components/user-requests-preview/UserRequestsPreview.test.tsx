import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserRequestPreview from "./UserRequestsPreview";

test('UserRequestsPreview component renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <UserRequestPreview />
        </MemoryRouter>
    );

    // when
    const userRequests = screen.getByTestId('users-requests');
    const allRequests = screen.getByTestId('all-requests');
    const title = screen.getByTestId('title');

    // then
    expect(userRequests).toBeInTheDocument();
    expect(allRequests).toBeInTheDocument();
    expect(title).toBeInTheDocument();
});