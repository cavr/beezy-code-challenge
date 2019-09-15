import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Typography, Button, makeStyles, Grid } from '@material-ui/core';
import More from '@material-ui/icons/Web';
import Skeleton from '@material-ui/lab/Skeleton';

import notFoundImage from '../../images/not_found.png';

const useStyles = makeStyles({
    card: {
        width: '60vw',
        minHeight: '500px'
    },
    img: {
        width: '60vw',
        height: '30vw'
    },
    button: {
        marginTop: '8px',
    },
    svgButton: {
        marginRight: '4px'
    },
    text: {
        fontWeight: 900,
        padding: 8
    }
})

export const CharacterDetail = ({
    thumbnail = { value: '' },
    name = '',
    description = '',
    comics = { items: [] },
    urls = [],
    loading
}) => {
    const classes = useStyles();

    const addNotFoundSrc = e => {
        e.preventDefault();
        e.target.src = notFoundImage;
    };

    return (
        <Fragment>
            {!loading ? (
                <Card className={classes.card}>
                    <img
                        className={classes.img}
                        onError={addNotFoundSrc}
                        data-testid="img"
                        alt={name}
                        src={thumbnail.value}
                    />
                    <Box padding={2}>
                        <Grid justify="space-around" container width={500}>
                            {urls.map(url => (
                                <Button className={classes.button} key={url.type} variant="outlined" target="_blank" href={url.url}>
                                    <More className={classes.svgButton} />
                                    {url.type}
                                </Button>
                            ))}
                        </Grid>
                        <Typography className={classes.text} gutterBottom variant="body2">
                            {name}
                        </Typography>
                        <Typography display="block" variant="caption" >
                            {description}
                        </Typography>
                        <Grid justify="space-around" direction="column" container width={500}>
                            {comics.items.map(comic => (
                                <Typography key={comic.name} className={classes.text}>
                                    {comic.name}
                                </Typography>
                            ))}
                        </Grid>
                    </Box>
                </Card>
            ) : (
                    <Box marginTop={4}>
                        {true && (
                            <Card className={classes.card}>
                                <Skeleton data-testid="skeleton" className={classes.img} /> <Skeleton width="60%" />
                                <Skeleton width="60%" />
                                <Skeleton width="60%" />
                                <Skeleton width="60%" />
                            </Card>
                        )}
                    </Box>
                )}
        </Fragment>
    );
};

CharacterDetail.propTypes = {
    thumbnail: PropTypes.object,
    name: PropTypes.string,
    description: PropTypes.string,
    comics: PropTypes.object,
    urls: PropTypes.array,
    loading: PropTypes.bool
}
