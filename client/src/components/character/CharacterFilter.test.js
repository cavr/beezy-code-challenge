import React from 'react';
import { render, fireEvent } from '@testing-library/react';


import { CharacterFilter } from './CharacterFilter';

describe('Character Filter', () => {
    const props = {
        onFilterChange: jest.fn(),
        initialFilter: {
            orderBy: 'orderBy',
            limit: '10',
            data: '19/12/1990'
        }
    };

    test('Renders OK', async () => {
        const { container } = render(<CharacterFilter {...props} />);

        const inputs = container.querySelectorAll('input');

        expect(inputs.length).toBe(5);

    })

    test('Change handler', async () => {
        const { getByText, container } = render(<CharacterFilter {...props} />);

        const select = await container.querySelector('#select-orderBy');

        fireEvent.click(select);

        const option = await getByText(/name/i);

        await fireEvent.click(option);

        expect(props.onFilterChange).toHaveBeenLastCalledWith({ "data": "19/12/1990", "limit": "10", "orderBy": "name" });


    })




});
