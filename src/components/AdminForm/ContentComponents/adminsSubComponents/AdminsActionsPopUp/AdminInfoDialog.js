import React from 'react'

import { Button , Grid , List , ListItemText , ListItem  } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';

const AdminInfoDialog = (props) => {

    return (
      <Dialog fullWidth maxWidth="sm" onClose={props.state.setInfoDialog} open={props.state.infoDialog}>
          <Grid sx={{height: 'auto'}} container spacing={2}>
            <Grid item xl={12} md={12} sm={12} xs={12}>
            <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' , my : '15px' , display :'flex' , justifyContent: 'center' , alignItems: 'center', flexDirection: 'column' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItem style={{ my: .5 , mx: 5 , minHeight: '50px' ,flexDirection: "row" , width: '80%' , margin: '0 auto 0 auto' , height: "auto" , overflow: 'auto' , overflowX : 'hidden'}}  component="div" disablePadding>
                <ListItemText sx={{maxWidth: '30%'}} primary={'Name : \t' } />
                <ListItemText sx={{maxWidth: '70%' , display:'flex', justifyContent:'flex-start'}} variant="h1" primary={props.adminData.adminName} />
              </ListItem>
              <Divider sx={{ width: '90%' }}/>
              <ListItem style={{ my: .5 , mx: 5 , minHeight: '50px' ,flexDirection: "row" , width: '80%' , margin: '0 auto 0 auto' , height: "auto" , overflow: 'auto' , overflowX : 'hidden'}}  component="div" disablePadding>
                <ListItemText sx={{maxWidth: '30%'}} primary={'Email : \t' } />
                <ListItemText sx={{maxWidth: '70%' , display: 'flext' , justifyContent:'flex-start'}} variant="h1" primary={props.adminData.adminEmail} />
              </ListItem>
              <Divider sx={{ width: '90%' }}/>
              <ListItem style={{ my: .5 , mx: 5 , minHeight: '50px' ,flexDirection: "row" , width: '80%' , margin: '0 auto 0 auto' , height: "auto" , overflow: 'auto' , overflowX : 'hidden'}}  component="div" disablePadding>
                <ListItemText sx={{maxWidth: '30%'}} primary={'Password : \t' } />
                <ListItemText sx={{maxWidth: '70%' , display: 'flext' , justifyContent:'flex-start'}} variant="h1" primary={props.adminData.adminPassword} />
              </ListItem>
            </List>
            </Grid>
          </Grid>
          <Button onClick={() => props.state.setInfoDialog(false)}>close</Button>
      </Dialog>
    )
}

export default AdminInfoDialog