import React from 'react';
import PropTypes from 'prop-types';

import { useIntersection } from '../../customHooks';

export const Image = ({ src, alt, ...props }) => {


    const { node, observer } = useIntersection({
        action: () => {
            node.current && (node.current.src = `${src}`);
            observer.current && observer.current.unobserve(node.current);
            observer.current && observer.current.disconnect();

        },
        rootMargin: '0px 0px 300px 0px',
        threshold: [0, 0.25]
    });

    return <img ref={node} {...props} alt={alt} />;
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};
