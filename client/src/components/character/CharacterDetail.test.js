import React from 'react';
import { render } from '@testing-library/react';


import { CharacterDetail } from './CharacterDetail';

describe('Character Detail', () => {
    const props = {
        thumbnail: {},
        name: 'name',
        description: '',
        comics: { items: [{ name: 'comic' }] },
        urls: [{ type: 'url' }]
    };

    test('Renders OK', async () => {
        const { findByText } = await render(<CharacterDetail {...props} />);

        const textKeys = ['name', 'url', 'comic'];

        const textElements = await Promise.all(textKeys.map(async (key) => await findByText(key)));

        const textExpects = textElements.map(element => element.textContent);

        expect(textKeys.join('')).toBe(textExpects.join(''));

    })

    test('Renders Skeleton', async () => {
        const { container } = render(<CharacterDetail loading />);

        const skeleton = container.querySelectorAll('.MuiSkeleton-root');

        expect(skeleton.length).toBe(5);

    })


});
