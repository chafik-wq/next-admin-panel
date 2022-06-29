import React from 'react'

import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import AdminLogout from '../../../utils/AdminLogout'

const LogoutPopUp = (props) => {
    
    return (
        <Dialog fullWidth maxWidth="sm" onClose={props.state.setLogoutDialog} open={props.state.LogoutDialog}>
            <DialogTitle id="draggable-dialog-title">
                Logout
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to <strong> Logout </strong> ? 
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => props.state.setLogoutDialog(false)}>
                Cancel
              </Button>
              <Button color="error"
              onClick={async() => AdminLogout()} 
              >Logout</Button>
            </DialogActions>
        </Dialog>
    )
}

export default LogoutPopUp