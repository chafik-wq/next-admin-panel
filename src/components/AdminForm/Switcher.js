import React from 'react'

import { AdminPanelRootsContext } from './../../contexts/AdminPanelRootsContext'

const Switcher = () => {

    const { root , setRoot } = React.useContext(AdminPanelRootsContext);

  return (
    <>
    {
        root == "Home" ? <h1>Home</h1> : <h1>Admins</h1>
    }
    </>
  )
}

export default Switcher