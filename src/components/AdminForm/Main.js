import React from 'react'

import { TextField , Grid , Button , FormControl , FormHelperText } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { ThemeContext } from './../../contexts/ThemeContext';
import { AdminPanelRootsContext } from './../../contexts/AdminPanelRootsContext'
import Switcher from './Switcher'

const Main = () => {

    const { theme } = React.useContext(ThemeContext);
    const { root , setRoot } = React.useContext(AdminPanelRootsContext);

    return (
    <Grid container className="AdminForm-Main" style={{width: '90%' , height: '90vh' , backgroundColor: theme.p , borderRadius: '15px'}}>
        <Grid className="AdminForm-Nav" item xl={3} md={3} sm={12} xs={12}>
            <ListItem style={{flexDirection: "column" , width: '100%' , height: "60vh" , overflow: 'auto' , overflowX : 'hidden'}}  component="div" disablePadding>
                <ListItemButton onClick={() => setRoot('Home')} sx={{ my: 1.5 , mx: 5 }} style={{ width: '90%' , borderRadius: '5px'}} className="AdminForm-Nav-Active">
                    <CottageRoundedIcon sx={{  mx: 2 }} />
                    <ListItemText primary={`Home`} />
                </ListItemButton>
                <ListItemButton onClick={() => setRoot('Admins')} sx={{ my: 1.5 , mx: 5 }} style={{ width: '90%' , borderRadius: '5px'}}>
                    <AdminPanelSettingsRoundedIcon sx={{  mx: 2 }}/>
                    <ListItemText primary={`Admins`} />
                </ListItemButton >
                <ListItemButton sx={{ my: 1.5 , mx: 5 }} style={{ width: '90%' , borderRadius: '5px'}}>
                    <PeopleAltRoundedIcon sx={{  mx: 2 }}/>
                    <ListItemText primary={`Users`} />
                </ListItemButton>
                <ListItemButton sx={{ my: 1.5 , mx: 5 }} style={{ width: '90%' , borderRadius: '5px'}}>
                    <LogoutRoundedIcon sx={{  mx: 2 }}/>
                    <ListItemText primary={`Logout`} />
                </ListItemButton>
            </ListItem>
        </Grid>
        <Grid className="AdminForm-ContentContainer" item xl={6} md={6} sm={12} xs={12}>
            <Switcher />
        </Grid>
    </Grid>
    )
}

export default Main