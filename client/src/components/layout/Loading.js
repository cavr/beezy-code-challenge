import React, { useState, useEffect, useMemo } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

export const Loading = () => {
    const [height, setHeight] = useState();

    const styles = useMemo(() => {
        return {
            container: {
                height,
                position: 'absolute',
                backgroundColor: 'black',
                opacity: 0.5,
                top: 0,
                left: 0
            },
            circularProgress: {
                position: 'fixed',
                width: 100,
                height: 100,
                color: 'red',
                top: '0',
                marginTop: '20%',
            }
        };
    }, [height]);

    useEffect(() => {
        const rootElement = document.querySelector('body');
        const rootHeight = rootElement && rootElement.offsetHeight;
        setHeight(rootHeight);
    }, []);

    return (
        <Grid style={styles.container} container justify="center" >
            <CircularProgress data-testid="loading" style={styles.circularProgress} />
        </Grid>
    );
};
