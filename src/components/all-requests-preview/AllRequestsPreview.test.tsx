import React from 'react';
import { render, screen } from '@testing-library/react';
import AllRequestsPreview from "./AllRequestsPreview";

test('AllRequestsPreview component renders with all elements', () => {
    //before
    render(<AllRequestsPreview />);

    //when
    const allRequests = screen.getByTestId('all-requests');
    const title = screen.getByTestId('title');
    const sortOptions = screen.getByTestId('sort-options');

    //then
    expect(allRequests).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(sortOptions).toBeInTheDocument();
});