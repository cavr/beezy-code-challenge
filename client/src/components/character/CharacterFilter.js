import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import { SearchInput, FormSelectField, FormField } from '../common';
import { useForm } from '../../customHooks';


export const CharacterFilter = ({ onFilterChange, initialFilter = {} }) => {
    const { onChange, values } = useForm(initialFilter);

    const sortAsOptions = [{ name: 'name' }, { name: 'modified' }];

    const sortDescOptions = [{ name: '-name' }, { name: '-modified' }];

    const limitOptions = Array.from(Array(10), (_, x) => ({ name: x * 10 }));

    useEffect(() => {
        onFilterChange(values);
    }, [values, onFilterChange]);

    return (
        <Box margin={4} display="flex" justifyContent="space-around" flexWrap="wrap">
            <SearchInput hint="name" name="nameStartsWith" onSearch={onChange} />
            <FormSelectField
                name="orderBy"
                label="Ascending order"
                value={values.orderBy}
                onChange={onChange}
                choices={sortAsOptions}
            />
            <FormSelectField
                name="orderBy"
                label="Descending order"
                value={values.orderBy}
                onChange={onChange}
                choices={sortDescOptions}
            />
            <FormSelectField
                name="limit"
                label="Elements per load"
                value={values.limit}
                onChange={onChange}
                choices={limitOptions}
            />
            <FormField
                type="date"
                value={values.modifiedSince}
                name="modifiedSince"
                label="Modified Since"
                onChange={onChange}
                shrink
            />
        </Box>
    );
};

CharacterFilter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    initialFilter: PropTypes.object
};
