import * as React from 'react'

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import adminPanelRoots from './../../data/adminPanelRoots'
import { ThemeContext } from './../../contexts/ThemeContext';
import { AdminPanelRootsContext } from './../../contexts/AdminPanelRootsContext'
import Divider from '@mui/material/Divider';
import { useThemeProps } from '@mui/material';

const MainNav = () => {

    
    const { theme } = React.useContext(ThemeContext);
    const { root , setRoot } = React.useContext(AdminPanelRootsContext);

    const styles = {
        activeNavItem : {
            backgroundColor: theme.t,
            color: theme.reverseText,
            '&:hover' : {
                backgroundColor: theme.t,
            }
        }
    }

    return (
        <>
            <ListItem style={{flexDirection: "column" , width: '100%' , height: "60vh" , overflow: 'auto' , overflowX : 'hidden'}}  component="div" disablePadding>
                {
                    adminPanelRoots.map((item , index) => {
                        return (<>
                            <ListItemButton 
                                key = {index}
                                style={item.tag == root ? styles.activeNavItem  : null}   
                                onClick={() => setRoot(item.tag)} 
                                sx={{ my: 1.5 , mx: 5 , minHeight: '90px' }} 
                                className="AdminForm-Nav-Button"
                                >
                                    {item.icon}
                                    <ListItemText  primary={item.tag} />
                            </ListItemButton>
                            </>
                        )
                    })
                }
            </ListItem>
                <Divider style={{width:'80%'}}/>
                <ListItemButton color="success" sx={{ my: 1.5 , mx: 5,width: '90%' , borderRadius: '5px' , maxHeight: '50px'  }} >
                    <LogoutRoundedIcon sx={{  mx: 2 }}/>
                    <ListItemText primary={`Logout`} />
                </ListItemButton>
        </>
    )
}

export default MainNav