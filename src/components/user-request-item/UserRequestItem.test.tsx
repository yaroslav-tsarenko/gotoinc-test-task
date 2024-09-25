import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserRequestItem from './UserRequestItem';

test('UserRequestItem component renders with all elements', () => {
    // before
    render(
        <MemoryRouter>
            <UserRequestItem
                type="Order"
                fromCity="CityA"
                toCity="CityB"
                dispatchDate="2023-10-10"
                parcelType="Gadgets"
                description="A description"
                allowEditing={true}
                onDelete={() => {}}
            />
        </MemoryRouter>
    );

    // when
    const requestItem = screen.getByTestId('user-item');

    // then
    expect(requestItem).toBeInTheDocument();
});