import React, { createContext, useState } from 'react'

export const AdminPanelRootsContext = createContext()

function AdminPanelRootsContextProvider(props) {
    // eslint-disable-next-line
    const  [ navItems , setNavItems] = useState("Home")

    const value = { navItems , setNavItems }
    return (
        <AdminPanelRootsContext.Provider value={value}>
            {props.children}
        </AdminPanelRootsContext.Provider>
    )
}


export default AdminPanelRootsContextProvider