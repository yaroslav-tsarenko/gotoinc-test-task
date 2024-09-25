import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DeliveryForm from './DeliveryForm';

test('DeliveryForm component renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <DeliveryForm />
        </MemoryRouter>
    );

    // when
    const deliveryForm = screen.getByTestId('delivery-form');
    const inputGroupFromCity = screen.getByTestId('input-group-from-city');
    const inputGroupToCity = screen.getByTestId('input-group-to-city');
    const inputGroupDispatchDate = screen.getByTestId('input-group-dispatch-date');
    const buttonNav = screen.getByTestId('button-nav');

    // then
    expect(deliveryForm).toBeInTheDocument();
    expect(inputGroupFromCity).toBeInTheDocument();
    expect(inputGroupToCity).toBeInTheDocument();
    expect(inputGroupDispatchDate).toBeInTheDocument();
    expect(buttonNav).toBeInTheDocument();
});
