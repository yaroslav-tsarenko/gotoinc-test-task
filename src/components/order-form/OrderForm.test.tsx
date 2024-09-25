import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import OrderForm from './OrderForm';

test('OrderForm component renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <OrderForm />
        </MemoryRouter>
    );

    // when
    const orderForm = screen.getByTestId('order-form');
    const fromCityInput = screen.getByTestId('input-group-from-city');
    const toCityInput = screen.getByTestId('input-group-to-city');
    const parcelTypeSelect = screen.getByTestId('input-group-parcel-type');
    const dispatchDateInput = screen.getByTestId('input-group-dispatch-date');
    const descriptionTextarea = screen.getByTestId('input-group-description');
    const buttonNav = screen.getByTestId('button-nav');

    // then
    expect(orderForm).toBeInTheDocument();
    expect(fromCityInput).toBeInTheDocument();
    expect(toCityInput).toBeInTheDocument();
    expect(parcelTypeSelect).toBeInTheDocument();
    expect(dispatchDateInput).toBeInTheDocument();
    expect(descriptionTextarea).toBeInTheDocument();
    expect(buttonNav).toBeInTheDocument();
});