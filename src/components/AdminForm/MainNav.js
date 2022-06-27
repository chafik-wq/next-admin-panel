import * as React from 'react'

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import adminPanelRoots from './../../data/adminPanelRoots'
import { ThemeContext } from './../../contexts/ThemeContext';
import { AdminPanelRootsContext } from './../../contexts/AdminPanelRootsContext'


const MainNav = () => {

    
    const { theme } = React.useContext(ThemeContext);
    const { root , setRoot } = React.useContext(AdminPanelRootsContext);

    const styles = {
        activeNavItem : {
            backgroundColor: theme.t,
            color: theme.p,
            '&:hover' : {
                backgroundColor: theme.t,
            }
        },
        text: {
            color : theme.text,
        }
    }

    return (
        <ListItem style={{flexDirection: "column" , width: '100%' , height: "60vh" , overflow: 'auto' , overflowX : 'hidden'}}  component="div" disablePadding>
            {
                adminPanelRoots.map((item , index) => {
                    return (
                        <ListItemButton 
                            key = {index}
                            style={item.tag == root ? styles.activeNavItem  : null}   
                            onClick={() => setRoot(item.tag)} 
                            sx={{ my: 1.5 , mx: 5 }} 
                            className="AdminForm-Nav-Button"
                            >
                                {item.icon}
                                <ListItemText style={styles.text} primary={item.tag} />
                        </ListItemButton>
                    )
                })
            }

            <ListItemButton sx={{ my: 1.5 , mx: 5 }} style={{ width: '90%' , borderRadius: '5px'}}>
                <LogoutRoundedIcon sx={{  mx: 2 }}/>
                <ListItemText primary={`Logout`} />
            </ListItemButton>
        </ListItem>
    )
}

export default MainNav