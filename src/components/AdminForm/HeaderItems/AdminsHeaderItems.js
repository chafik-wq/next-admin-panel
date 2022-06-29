import React from 'react'

import { FormControl , InputAdornment , InputLabel , Input , FormHelperText , ListItem ,Grid , Button , TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { Formik } from 'formik';
import MakeNewAdmin from '../../../utils/MakeNewAdmin'

const AdminsHeaderItems = () => {

  const [ addNewAdmin , setAddNewAdmin ] = React.useState(false)

  const SlidingUp = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  // Add new Admin to the db
  const AddNewAdminForm = (
    <Formik
      initialValues={{ name: '',email: '', password: '' }}
      validate={values => {
        const errors = {};
        if(!values.name) {
          errors.name = 'Required'
        }else if (values.name.length < 3) {
          errors.name = 'Admin name must be at least 3 characters'
        }


        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        
        if (!values.password) {
          errors.password = "Required"
        } else if( values.password.length < 6 ) {
          errors.password = 'Week password'
        }

        return errors;
      }}
      onSubmit={async(values, { setSubmitting }) => {
        setSubmitting(true)
        let response = await MakeNewAdmin(values.name , values.email , values.password)
        window.location.reload()
      }}
     >
       {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
       }) => (
        <Paper sx={{ m: 1 }} elevation={4}>
          <Dialog TransitionComponent={SlidingUp} keepMounted fullWidth maxWidth="sm" onClose={() => setAddNewAdmin(false)} open={addNewAdmin}>
            <DialogTitle id="draggable-dialog-title">
              Add New Admin
            </DialogTitle>
            <DialogContent >
              <FormControl sx={{margin: '15px 0 5px 0' , width: '100%'}}>
                <TextField 
                name="name" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={errors.name && touched.name && errors.name}
                fullWidth label="Name" id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText error={errors.name && touched.name && errors.name} id="my-helper-text">{errors.name && touched.name && errors.name}</FormHelperText>
              </FormControl>
              <FormControl sx={{margin: '15px 0 5px 0' , width: '100%'}}>
                <TextField 
                name="email" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email} 
                error={errors.email && touched.email && errors.email} 
                fullWidth label="Email" id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText error={errors.email && touched.email && errors.email} id="my-helper-text">{errors.email && touched.email && errors.email}</FormHelperText>
              </FormControl>
              <FormControl sx={{margin: '15px 0 5px 0' , width: '100%'}}>
                <TextField 
                type="password"
                name="password" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password && errors.password}
                fullWidth label="Password" id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText error={errors.password && touched.password && errors.password} id="my-helper-text">{errors.password && touched.password && errors.password}</FormHelperText>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setAddNewAdmin(false)} autoFocus >
                Cancel
              </Button>
              <Button onClick={handleSubmit} disabled={isSubmitting} color="error" 
              >Save</Button>
            </DialogActions>
          </Dialog>
        </Paper>
       )}
    </Formik>
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