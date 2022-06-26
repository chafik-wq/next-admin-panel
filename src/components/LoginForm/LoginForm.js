import * as React from 'react'
import { useRef } from 'react'
import { ThemeContext } from './../../contexts/ThemeContext';
import { TextField , Grid , Button , FormControl , FormHelperText } from '@mui/material';
import { Formik } from 'formik';
import LoginAdmin from './../../utils/LoginAdmin'


const LoginForm = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <FormikSystem theme={theme} />
  )
}

const FormikSystem = ({theme}) => {
  return (
    <Formik
    initialValues={{ email: '', password: '' }}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting , setErrors }) => {
      LoginAdmin(values.email , values.password , setErrors)
      setSubmitting(false)
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
      /* and other goodies */
    }) => (
        <Grid 
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="start"
        className="LoginForm"
        style={{backgroundColor: theme.p }}>
          <FormControl style={{ width: '80%' , marginTop: '100px'}}>
            <TextField type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            id="outlined-basic" label="Email" variant="outlined" />
            <FormHelperText className="errorText">{errors.email && touched.email && errors.email}</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '80%' , marginTop: '15px' }}>
            <TextField 
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            id="outlined-basic" label="Password" variant="outlined" />
            <FormHelperText className="errorText">{errors.password && touched.password && errors.password}</FormHelperText>
          </FormControl>
          <Button onClick={handleSubmit} type="submit" disabled={isSubmitting} variant="contained" fullWidth style={{ marginTop: '50px' , width: '80%' , padding: ' 10px 0 10px 0' }}>Login</Button>
        </Grid>
    )}
    </Formik>
  )
}

export default LoginForm