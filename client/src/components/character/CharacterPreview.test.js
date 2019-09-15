import React from 'react';
import { render, fireEvent } from '@testing-library/react';


import { CharacterPreview } from './CharacterPreview';

describe('Character Preview', () => {
    const props = {
        id: 1,
        thumbnail: {},
        name: 'name',
        onClick: jest.fn()
    };

    test('Renders OK', async () => {
        const { findByText } = render(<CharacterPreview {...props} />);

        const text = await findByText('name');

        expect(text.textContent).toBe('name');
    })

    test('Onclick OK', async () => {
        const { findByTestId } = render(<CharacterPreview {...props} />);

        const card = await findByTestId('card');

        await fireEvent.click(card);

        expect(props.onClick).toHaveBeenCalledWith(1);
    })



});
