import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { useIntersection } from './IntersectionHook'
import { render } from '@testing-library/react';


const observe = jest.fn()
window.IntersectionObserver = jest.fn().mockImplementation(query => {
    const entries = [{ intersectionRatio: 1 }]
    return {
        observe,
        disconnect: () => query(entries)

    };
});
test('should intersect', () => {

    const action = jest.fn()

    const { result } = renderHook(() => useIntersection({ action }));

    act(() => {
        render(<div id="test" ref={result.current.node}></div>)
    })

    expect(action).toHaveBeenCalled();

    expect(result.current.node.current).not.toBe(null);
});

