import React from 'react';
import PropTypes from 'prop-types';
import {
    FormControl,
    InputLabel,
    FormHelperText,
    Select,
    MenuItem,
    Box
} from '@material-ui/core';
import uuidv4 from 'uuid/v4';

export const FormSelectField = ({
    name,
    label,
    onChange,
    error,
    errorMessage,
    value = '',
    choices = []
}) => {
    return (<Box width={{ xs: '100%', md: '250px' }} margin={2}>
        <FormControl fullWidth error={error}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Select
                name={name}
                onChange={onChange}
                value={value || ''}
                SelectDisplayProps={{
                    'data-testid': 'select'
                }}>
                <MenuItem value="">
                    <em>All</em>
                </MenuItem>
                {choices.map(item => (
                    <MenuItem data-testid="item" key={uuidv4()} value={item.name}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
            {error && <FormHelperText>{errorMessage}</FormHelperText>}
        </FormControl>
    </Box>
    );
};

FormSelectField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    choices: PropTypes.array,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
