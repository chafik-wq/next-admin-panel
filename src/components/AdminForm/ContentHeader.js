import React from 'react'

import { Grid , TextField } from '@mui/material';
import { ThemeContext } from './../../contexts/ThemeContext';
import { AdminPanelRootsContext } from './../../contexts/AdminPanelRootsContext'
import AdminsHeaderItems from './HeaderItems/AdminsHeaderItems';

const ContentHeader = () => {

  const { theme } = React.useContext(ThemeContext);
  const { root , setRoot } = React.useContext(AdminPanelRootsContext);

  return (
    <Grid direction="row" style={{backgroundColor: theme.p }} className="AdminForm-ContentContainer-Nav">
        <TextField 
          label="Search"
          variant="filled"
          color="primary"
          sx={{ 
            input: { 
              color: theme.text , 
              borderBottom: '2px solid ' + theme.text,
              width: 400,
            } , "label": {color: theme.text } 
        }}
        >
        </TextField>
        { root == 'Admins' ? <AdminsHeaderItems /> : null}
    </Grid>
  )
}

export default ContentHeader