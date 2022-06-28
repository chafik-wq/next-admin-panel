import React from 'react'

import { Grid } from '@mui/material';
import { ThemeContext } from './../../contexts/ThemeContext';
import MainNav from './MainNav'
import Switcher from './Switcher'
import ContentHeader from './ContentHeader'

const Main = () => {

    const { theme } = React.useContext(ThemeContext);

    return (
    <Grid container className="AdminForm-Main" style={{width: '90%' , height: '90vh' , backgroundColor: theme.p , borderRadius: '15px'}}>
        <Grid className="AdminForm-Nav" direction="column" item xl={3} md={3} sm={12} xs={12}>
            <MainNav />
        </Grid>
        <Grid className="AdminForm-ContentContainer" item xl={9} md={9} sm={12} xs={12}>
            <ContentHeader />
            <Switcher />
        </Grid>
    </Grid>
    )
}

export default Main