import React from 'react';
import { render, fireEvent } from '@testing-library/react';


import { CharacterPreview } from '../character';
import { List } from './List';


describe('List', () => {
    const props = {
        data: [{ 'name': 'name', id: 10 }, { 'name': 'name', id: 11 }],
        onClick: jest.fn(),
        component: CharacterPreview,
        loadMore: jest.fn(),
    };

    test('List more button OK', async () => {
        const { findByTestId } = render(
            <List {...props} />
        );
        const button = await findByTestId('more-button');
        await fireEvent.click(button);

        expect(props.loadMore).toHaveBeenCalled();
    });

    test('List elements renders OK', async () => {
        const { container } = render(
            <List {...props} />
        );

        const imgs = container.querySelectorAll('img');

        expect(imgs.length).toBe(2);
    });

    test('List button disabled', async () => {
        const { findByTestId } = render(
            <List {...props} disabled />
        );

        const button = await findByTestId('more-button');

        expect(Object.values(button.classList).join('')).toContain('disabled');
    });


});

