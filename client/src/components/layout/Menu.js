import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Drawer
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins && theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    }
}));

export const Menu = ({ items, mobileOpen, setMobileOpen }) => {
    const classes = useStyles();

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={() => setMobileOpen(open => !open)}
                classes={{
                    paper: classes.drawerPaper
                }}>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {items.map(({ name, icon: Icon, url }) => (
                        <ListItem component={Link} to={url} button key={name}>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </nav>
    );
};

Menu.propTypes = {
    items: PropTypes.array,
    mobileOpen: PropTypes.bool,
    setMobileOpen: PropTypes.func
};
