import React from 'react'

import { AdminPanelRootsContext } from './../../contexts/AdminPanelRootsContext'
import HomeComponent from './ContentComponents/HomeComponent';
import AdminsComponent from './ContentComponents/AdminsComponent'
import UsersComponent from './ContentComponents/UsersComponent'


const Switcher = () => {

    const { root , setRoot } = React.useContext(AdminPanelRootsContext);

  return (
    <>
    {
      root == "Home" ? <HomeComponent /> : null
    }
    {
      root == "Admins" ? <AdminsComponent /> : null
    }
    {
      root == "Users" ? <UsersComponent /> : null
    }
    </>
  )
}

export default Switcher