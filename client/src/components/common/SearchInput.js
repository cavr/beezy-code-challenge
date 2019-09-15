import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px'
    },
    box: {
        width: '100%'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export const SearchInput = ({ onSearch, hint = "name", name = hint }) => {
    const [value, setValue] = useState('');

    const classes = useStyles();

    const label = `Search by ${hint}`;

    const onChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    const handleSearch = () => {
        onSearch({ target: { value: value === '' ? null : value, name } });
    }

    const handleKeyDown = ({ key }) => {
        key === 'Enter' && handleSearch();
    }
    return (
        <Box className={classes.box}>
            <Paper className={classes.root}>
                <InputBase
                    fullWidth
                    className={classes.input}
                    placeholder={label}
                    inputProps={{
                        'aria-label': label,
                        onKeyDown: handleKeyDown
                    }}
                    onChange={onChange}
                    value={value}
                />
                <IconButton onClick={handleSearch} className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    );
}


SearchInput.propTypes = {
    onSearch: PropTypes.func
}