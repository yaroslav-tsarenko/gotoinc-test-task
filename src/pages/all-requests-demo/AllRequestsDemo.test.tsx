import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllRequestsDemo from "./AllRequestsDemo";

test('AllRequestsDemo page component renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <AllRequestsDemo />
        </MemoryRouter>
    );

    // when
    const allRequestsPage = screen.getByTestId('all-requests-demo-page');

    // then
    expect(allRequestsPage).toBeInTheDocument();
});