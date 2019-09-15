import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import {
    Box,
    Breadcrumbs,
    Grid,
    Button,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import { CharacterDetail } from '../components/character';
import { GET_CHARACTER_QUERY } from '../apollo';

export const CharacterPage = ({ match }) => {
    const id = match.params.id;

    const { loading, error, data = { character: {} } } = useQuery(GET_CHARACTER_QUERY, {
        variables: { id: parseInt(id) }
    });

    return (
        <Grid container justify="center" alignItems="center" direction="column">
            <Breadcrumbs>
                <Button variant="outlined" component={RouterLink} to="/characters">
                    Characters
        </Button>
            </Breadcrumbs>
            <Box marginTop={4} >
                <CharacterDetail loading={loading} {...data.character} />
            </Box>
            {error && <div>Error</div>}
        </Grid>
    );
};

CharacterPage.propTypes = {
    math: PropTypes.object
};
