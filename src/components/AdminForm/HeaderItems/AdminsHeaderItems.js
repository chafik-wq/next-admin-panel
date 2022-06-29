import React from 'react'

import { FormControl , InputAdornment , InputLabel , Input , FormHelperText , ListItem ,Grid , Button , TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';

const AdminsHeaderItems = () => {

  const [ addNewAdmin , setAddNewAdmin ] = React.useState(false)

  const SlidingUp = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const AddNewAdminForm = (
      <Paper sx={{ m: 1 }} elevation={4}>
        <Dialog TransitionComponent={SlidingUp} keepMounted fullWidth maxWidth="sm" onClose={() => setAddNewAdmin(false)} open={addNewAdmin}>
          <DialogTitle id="draggable-dialog-title">
            Add New Admin
          </DialogTitle>
          <DialogContent >
            <FormControl sx={{margin: '15px 0 5px 0' , width: '100%'}}>
              <TextField fullWidth label="Name" id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>
            <FormControl sx={{margin: '15px 0 5px 0' , width: '100%'}}>
              <TextField fullWidth label="Email" id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>
            <FormControl sx={{margin: '15px 0 5px 0' , width: '100%'}}>
              <TextField fullWidth label="Password" id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text"></FormHelperText>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAddNewAdmin(false)} autoFocus >
              Cancel
            </Button>
            <Button color="error" 
            >Save</Button>
          </DialogActions>
        </Dialog>
      </Paper>
  )

  return (
    <>
      <Grid container className="AdminsForm-Header">
        <Button onClick={() => setAddNewAdmin(true)} color="primary" className="AdminsForm-Header-AddNewAdminButton"><AddIcon /></Button>
      </Grid>
      { addNewAdmin ? AddNewAdminForm  : null }
    </>
  )
}

export default AdminsHeaderItems