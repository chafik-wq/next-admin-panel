import React, { createContext, useState } from 'react'

export const AdminPanelRootsContext = createContext()

function AdminPanelRootsContextProvider(props) {
    // eslint-disable-next-line
    const [root, setRoot] = useState("Home")

    const value = { root, setRoot }
    return (
        <AdminPanelRootsContext.Provider value={value}>
            {props.children}
        </AdminPanelRootsContext.Provider>
    )
}


export default AdminPanelRootsContextProvider