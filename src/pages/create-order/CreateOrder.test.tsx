import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreateOrder from "./CreateOrder";

test('CreateOrder page renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <CreateOrder />
        </MemoryRouter>
    );

    // when
    const createOrderPage = screen.getByTestId('create-order-page');

    // then
    expect(createOrderPage).toBeInTheDocument();
});