import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { FormSelectField } from './FormSelectField';

describe('Form Field', () => {
    const props = {
        name: '', label: '', onChange: jest.fn(), value: 'value', choices: [{ name: 'asa' }]
    }


    test('FormSelectField  renders', () => {
        const { container } = render(<FormSelectField {...props} />);
        const input = container.querySelector('input');
        expect(input.value).toBe('value');
    });

    test('Form Select field changes ', () => {
        const { getByTestId, getByText } = render(<FormSelectField {...props} />);
        const selectButton = getByTestId('select')
        fireEvent.click(selectButton)
        const option = getByText(/asa/i);
        fireEvent.click(option);
        expect(props.onChange).toHaveBeenCalled();
    });
});
