import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';

import { TopBar } from './TopBar';

describe('TopBar ', () => {
    const props = {
        mobileOpen: false, setMobileOpen: jest.fn()
    };

    test('TopBar should have button', async () => {
        const { container } = render(<TopBar {...props} />);
        const button = await container.querySelector('button');

        fireEvent.click(button);
        expect(props.setMobileOpen).toHaveBeenCalled();
    });

});
