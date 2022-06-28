import React from 'react'

import { ThemeContext } from './../../../contexts/ThemeContext';
import AdminsList from './adminsSubComponents/AdminsList'

const AdminsComponent = () => {

  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <AdminsList />
    </>
  )
}

export default AdminsComponent