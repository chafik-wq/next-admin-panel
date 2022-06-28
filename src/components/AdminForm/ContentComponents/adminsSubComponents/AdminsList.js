import React from 'react'

import { List , ListItemText , ListSubheader ,ListItemButton , ListItem , Button } from '@mui/material';
import { ThemeContext } from './../../../../contexts/ThemeContext';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import GetAdminsData from './../../../../utils/GetAdminsData'
import AdminsInfoDialog from './AdminInfoDialog'

const AdminsList = () => {

  const { theme } = React.useContext(ThemeContext);
  const [ adminsData,setAdminsData ] = React.useState(null)
  const [ loading,setLoading ] = React.useState(true)

  const [ selectedAdmin,setSelectedAdmin ] = React.useState('chafik')
  const [ infoDialog,setInfoDialog ] = React.useState(false)


  React.useEffect(() => {
    async function get() {
      let data = await GetAdminsData()
      setAdminsData(data)
      setLoading(false)
    }
    get()
    .catch(console.error)
  }, [])

  if(loading) {
    return 
  }

  return (
    <>
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' , my : '15px' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Admins
        </ListSubheader>
      }>
        {
          adminsData.map((admin , index) => {
            return (
              <ListItem key={index} style={{ my: .5 , mx: 5 , minHeight: '50px' ,flexDirection: "row" , width: '80%' , margin: '0 auto 0 auto' , height: "auto" , overflow: 'auto' , overflowX : 'hidden'}}  component="div" disablePadding>
                <AdminPanelSettingsRoundedIcon />
                <ListItemText primary={admin.adminName} />
                <Button color="error" sx={{ mx: .2 }}>Delete</Button>
                <Button color="warning" sx={{ mx: .2 }}>Edite</Button>
                <Button 
                onClick={() => {
                  setSelectedAdmin(admin.adminName)
                  setInfoDialog(true)
                }}
                color="primary">Info</Button>
              </ListItem>
            )
          })
        }
    </List>
    <AdminsInfoDialog state={{infoDialog , setInfoDialog}} adminData={selectedAdmin}/>
    </>
  )
}

export default AdminsList