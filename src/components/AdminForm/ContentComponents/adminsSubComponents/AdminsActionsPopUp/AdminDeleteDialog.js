import React from 'react'

import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteAdmin from '../../../../../utils/DeleteAdmin';

const AdminInfoDialog = (props) => {

    return (
        <Dialog fullWidth maxWidth="sm" onClose={props.state.setDeleteDialog} open={props.state.deleteDialog}>
            <DialogTitle id="draggable-dialog-title">
                Delete Admin
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this admin <strong>{props.adminData.adminName}</strong>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => props.state.setDeleteDialog(false)}>
                Cancel
              </Button>
              <Button color="error" onClick={async() => { 
                props.state.setDeleteDialog(false)
                DeleteAdmin(props.adminData._id , props.callback) 
              }}
              >Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AdminInfoDialog