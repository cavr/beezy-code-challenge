import { useEffect, useCallback, useRef } from 'react';

export const useIntersection = ({
    action,
    rootMargin = '0px',
    threshold = 1.0
}) => {
    const callback = useCallback(
        entries => {
            entries[0].intersectionRatio > 0 && action();
        },
        [action]
    );

    const observer =
        window.IntersectionObserver &&
        new IntersectionObserver(callback, { rootMargin, threshold });

    const ref = useRef(observer);

    const node = useRef();

    useEffect(() => {
        ref.current && ref.current.disconnect();
        ref.current =
            window.IntersectionObserver &&
            new IntersectionObserver(callback, { rootMargin, threshold });
        node.current && ref.current && ref.current.observe(node.current);
    }, [action, callback, rootMargin, threshold]);

    return {
        node,
        observer: ref
    };
};
