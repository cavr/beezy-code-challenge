import React from 'react';
import PropTypes from 'prop-types';
import {
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Box
} from '@material-ui/core';

export const FormField = ({
    name,
    value,
    label,
    onChange,
    error,
    errorMessage,
    type = 'text',
    shrink
}) => {
    return (
        <Box margin={2} width={{ xs: '100%', md: '250px' }}>
            <FormControl fullWidth error={error}>
                <InputLabel shrink={shrink} htmlFor={name}>
                    {label}
                </InputLabel>
                <Input
                    inputProps={{
                        'aria-label': label
                    }}
                    type={type}
                    value={value || ''}
                    onChange={onChange}
                    name={name}
                />
                {error && <FormHelperText>{errorMessage}</FormHelperText>}
            </FormControl>
        </Box>
    );
};

FormField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    type: PropTypes.string,
    shrink: PropTypes.bool,
    value: PropTypes.string
};
