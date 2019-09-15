import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Typography, makeStyles } from '@material-ui/core';

import notFoundImage from '../../images/not_found.png';


const useStyles = makeStyles(theme => ({
    'card': {
        minHeight: '350px',
        cursor: 'pointer',
        margin: '16px',
        '&:hover': {
            transform: 'scale(1.1)',
            background: 'red',
        }
    },
    'name': {
        fontWeight: 900,
        textAlign: 'center'
    },
    'image': {
        width: 400, height: 350
    }

}));


export const CharacterPreview = ({ id, thumbnail = { value: null }, name, onClick }) => {

    const classes = useStyles();

    const addNotFoundSrc = (e) => {
        e.target.src = notFoundImage;
    }

    const handleClick = (e) => {
        e.preventDefault();
        onClick(id);
    }

    return <Card data-testid="card" className={classes.card} onClick={handleClick}>
        <img className={classes.image} onError={addNotFoundSrc} data-testid="img" alt={name} src={thumbnail.value} />
        <Box  >
            <Typography className={classes.name} gutterBottom variant="body2">
                {name}
            </Typography>
        </Box>
    </Card>

}

CharacterPreview.propTypes = {
    id: PropTypes.string,
    thumbnail: PropTypes.object,
    name: PropTypes.string,
    onClick: PropTypes.func
}