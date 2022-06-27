import React from 'react'

import { Grid , Box , TextField } from '@mui/material';
import { InputAdornment , IconButton }  from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const ContentHeader = () => {
  return (
    <Grid className="AdminForm-ContentContainer-Nav">
        <TextField 
          label="Search"
          variant="filled" 
        >
          <SearchIcon />
        </TextField>

    </Grid>
  )
}

export default ContentHeader