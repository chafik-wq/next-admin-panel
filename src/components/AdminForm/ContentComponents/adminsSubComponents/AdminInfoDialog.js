import React from 'react'

import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const AdminInfoDialog = (props) => {



    return (
         <Dialog onClose={props.state.setInfoDialog} open={props.state.infoDialog}>
         <DialogTitle>Set backup account</DialogTitle>
         
       </Dialog>
    )
}

export default AdminInfoDialog