import React from 'react'

import { List , ListItemText , ListSubheader ,ListItemButton , ListItem , Button } from '@mui/material';
import { ThemeContext } from './../../../../contexts/ThemeContext';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import GetAdminsData from './../../../../utils/GetAdminsData'
import AdminsInfoDialog from './AdminsActionsPopUp/AdminInfoDialog'
import AdminsDeleteDialog from './AdminsActionsPopUp/AdminDeleteDialog'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


import Grow from '@mui/material/Grow';


const AdminsList = () => {

  const { theme } = React.useContext(ThemeContext);
  const [ adminsData,setAdminsData ] = React.useState(null)
  const [ loading,setLoading ] = React.useState(true)

  const [ selectedAdmin,setSelectedAdmin ] = React.useState(0)
  const [ infoDialog,setInfoDialog ] = React.useState(false)
  const [ deleteDialog,setDeleteDialog ] = React.useState(false)


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
    return (
      <Stack sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' , my : '15px'}}>
        <Skeleton variant="text" width={"10%"} height={38}/>
        <Skeleton sx={{ margin: '5px auto 5px auto' }} variant="rectangular" width={"80%"} height={40} />
        <Skeleton sx={{ margin: '5px auto 5px auto' }} variant="rectangular" width={"80%"} height={40} />
      </Stack>
    )
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
            <Grow in={true} timeout={1000}>
              <ListItem key={index} style={{ my: .5 , mx: 5 , minHeight: '50px' ,flexDirection: "row" , width: '80%' , margin: '0 auto 0 auto' , height: "auto" , overflow: 'auto' , overflowX : 'hidden'}}  component="div" disablePadding>
                <AdminPanelSettingsRoundedIcon />
                <ListItemText primary={admin.adminName} />
                <Button color="error" sx={{ mx: .2 }} 
                onClick={() => {
                  setSelectedAdmin(index)
                  setDeleteDialog(true)
                }}
                >Delete</Button>
                <Button color="warning" sx={{ mx: .2 }}>Edite</Button>
                <Button 
                onClick={() => {
                  setSelectedAdmin(index)
                  setInfoDialog(true)
                }}
                color="primary">Info</Button>
              </ListItem>
            </Grow>
            )
          })
        }
    </List>
    {infoDialog ? <AdminsInfoDialog state={{infoDialog , setInfoDialog}} adminData={adminsData[selectedAdmin] } /> : null }
    {deleteDialog ? <AdminsDeleteDialog state={{deleteDialog , setDeleteDialog}} adminData={adminsData[selectedAdmin]} callback={setAdminsData}  /> : null }
    </>
  )
}

export default AdminsList