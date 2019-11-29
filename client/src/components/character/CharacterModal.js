import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { TestContext } from '../../pages/LocaState';



export const CharacterModal = () => {

    const { open, close, addElement } = useContext(TestContext);

    const modal = () => {
        return <Dialog open>
            <DialogTitle>Modal</DialogTitle>
            <DialogActions>
                <Button color="primary" onClick={close}>
                    Close
            </Button>
                <Button color="primary" onClick={addElement}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    }


    return open && modal();
}

CharacterModal.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func,
    addElement: PropTypes.func
}