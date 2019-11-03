import { useEffect, useRef } from 'react';

export const useIntersection = ({
    action,
    rootMargin = '0px',
    threshold = 1.0
}) => {
    const ref = useRef();

    const node = useRef();

    useEffect(() => {

        const callback = entries => {
            entries[0].intersectionRatio > 0 && action();
        }
        const observer =
            window.IntersectionObserver &&
            new IntersectionObserver(callback, { rootMargin, threshold });

        ref.current = observer;

        node.current && observer && observer.observe(node.current);

        return () => {
            observer && observer.disconnect();
        };
    }, [action, rootMargin, threshold]);

    return {
        node,
        observer: ref
    };
};
