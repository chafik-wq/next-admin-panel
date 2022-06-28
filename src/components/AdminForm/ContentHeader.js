import React from 'react'

import { Grid , TextField } from '@mui/material';
import { ThemeContext } from './../../contexts/ThemeContext';

const ContentHeader = () => {

  const { theme } = React.useContext(ThemeContext);


  return (
    <Grid style={{backgroundColor: theme.p}} className="AdminForm-ContentContainer-Nav">
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

    </Grid>
  )
}

export default ContentHeader