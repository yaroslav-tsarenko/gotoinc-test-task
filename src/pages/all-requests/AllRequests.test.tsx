import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllRequests from "./AllRequests";

test('AllRequests page renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <AllRequests />
        </MemoryRouter>
    );

    // when
    const allRequestsPage = screen.getByTestId('all-requests-page');

    // then
    expect(allRequestsPage).toBeInTheDocument();
});