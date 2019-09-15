import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { SearchInput } from './SearchInput';

describe('SearchInput ', () => {
    const props = {
        onSearch: jest.fn(), hint: "name"
    };

    test('SearchInput  onSearch', () => {
        const { container } = render(<SearchInput {...props} />);
        const input = container.querySelector('input');
        fireEvent.change(input, {
            target: {
                value: 'value'
            }
        });
        const button = container.querySelector('button');
        button.click();
        expect(props.onSearch).toHaveBeenCalledWith({ "target": { "name": "name", "value": "value" } });
    });

});
