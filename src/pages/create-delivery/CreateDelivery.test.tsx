import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreateDelivery from "./CreateDelivery";

test('CreateDelivery page renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <CreateDelivery />
        </MemoryRouter>
    );

    // when
    const createDeliveryPage = screen.getByTestId('create-delivery-page');

    // then
    expect(createDeliveryPage).toBeInTheDocument();
});