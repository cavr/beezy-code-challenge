import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Logo } from '../../images/Logo';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        marginLeft: drawerWidth,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        position: 'relative'
    }
}));

export const TopBar = ({ mobileOpen, setMobileOpen }) => {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <div className={classes.logo} >
                    <Logo />
                </div>
            </Toolbar>
        </AppBar >
    );
};

TopBar.propTypes = {
    mobileOpen: PropTypes.bool,
    setMobileOpen: PropTypes.func
}
