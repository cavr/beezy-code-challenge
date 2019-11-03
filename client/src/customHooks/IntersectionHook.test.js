import React from 'react';
import { useIntersection } from './IntersectionHook'
import { render } from '@testing-library/react';



window.IntersectionObserver = jest.fn().mockImplementation((query) => {
    const entries = [{ intersectionRatio: 1 }]
    return {
        observe: () => query(entries),
        disconnect: () => query(entries)

    };
});


const TestIntersection = ({ action }) => {
    const { node } = useIntersection({ action });

    return <div ref={node} />
};
test('should intersect', () => {

    const action = jest.fn();

    render(<TestIntersection action={action} />);

    expect(action).toHaveBeenCalled();
});

