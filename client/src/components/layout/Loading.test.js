import React from 'react';
import { render } from '@testing-library/react';


import { Loading } from './Loading';

describe('Loading', () => {

    test('Loading should appears', () => {
        const { container } = render(<Loading />);
        const circle = container.querySelector('circle');
        expect(circle).not.toBe(null);
    })


});
