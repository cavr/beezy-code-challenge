import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { FormField } from './FormField';

describe('Form Field', () => {
    const props = {
        name: 'name',
        value: 'value',
        label: 'label',
        onChange: jest.fn(),
        error: false,
        errorMessage: 'error'
    };

    test('FormField  renders', () => {
        const { container } = render(<FormField {...props} />);
        const input = container.querySelector('input');
        expect(input.value).toBe('value');
    });

    test('OnChange  renders', () => {
        const { container } = render(<FormField {...props} />);
        const input = container.querySelector('input');
        fireEvent.change(input, {
            target: {
                value: 'new'
            }
        });
        expect(props.onChange).toHaveBeenCalled();
    });
});
