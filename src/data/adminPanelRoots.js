import * as React from 'react'
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';


const adminPanelRoots = [
    {
        tag:"Home",
        icon: <CottageRoundedIcon sx={{  mx: 2 }}/>,
    },
    {
        tag:"Admins",
        icon: <AdminPanelSettingsRoundedIcon sx={{  mx: 2 }}/>,
    },
    {
        tag:"Users",
        icon: <PeopleAltRoundedIcon sx={{  mx: 2 }}/>,
    }
]

/**
 * To add new roots follow those two steps :
 *  - add a object container root data in adminPanelRoots array
 *  - add new components in ContentComponents folder and liked it with Switcher component
 *  - init the imported component in the Switcher with a condition
 *  - happy coding
 */




export default adminPanelRoots