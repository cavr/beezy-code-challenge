import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

import {
    CharacterFilter,
    CharacterContainerList
} from '../components/character';
import { history } from '../history';

export const CharactersPage = () => {
    const initialFilter = { orderBy: 'name', offset: 0, limit: 10 };

    const [filters, setFilters] = useState(initialFilter);

    const onClick = id => {
        history.push(`/characters/${id}`);
    };


    return (
        <div>
            <Typography variant="h4">Characters</Typography>
            <CharacterFilter
                initialFilter={initialFilter}
                onFilterChange={setFilters}
            />
            <CharacterContainerList
                filters={filters}
                onClick={onClick}
            />
        </div>
    );
};
