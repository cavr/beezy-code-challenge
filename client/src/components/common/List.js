import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Loading } from '../layout';
import { useIntersection } from '../../customHooks';

export const List = ({
    data = [],
    onClick,
    component: Component,
    loading,
    error,
    loadMore,
    disabled
}) => {


    const { node } = useIntersection({ action: loadMore });

    return (
        <Grid container justify="center" style={{ minHeight: '500px' }}>
            {data.map(item => (
                <Component key={item.id} {...item} onClick={onClick} />
            ))}
            {loading && <Loading />}
            {error && <div>Error</div>}
            {!loading && !data.length && <div>No data</div>}
            {!loading && data.length > 0 && (
                <Button
                    ref={node}
                    data-testid="more-button"
                    style={{ marginTop: 16 }}
                    size="medium"
                    fullWidth
                    color="secondary"
                    variant="contained"
                    disabled={disabled}
                    onClick={loadMore}>
                    Load more
        </Button>
            )}
        </Grid>
    );
};

List.propTypes = {
    data: PropTypes.array,
    onClick: PropTypes.func,
    component: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.object,
    loadMore: PropTypes.func,
    disabled: PropTypes.bool
};
