import { Box } from '@mui/material'
import React from 'react'
import PrincipleMessage from '../PrincipleMessage/PrincipleMessage'
import NdeTabs from '../Tabs/NDE_tabs'
import Welcome from '../welcome.js/index.js'

const Notifications = () => {

    const mainContainer = {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        margin: 'auto',
        justifyContent: { xs: 'center', md: 'center' },
        columnGap: '30px',
        rowGap: '30px',
        width: '98vw',
    }

    const notificationContainer = {
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '98%', md: '40%' },
        // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    }

    const handleMessages = {
        padding: '10px',
        // margin: { xs: 'auto', md: '10px' },
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        width: { xs: '98%', md: '60%' },
        // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    }

    return (
        <Box sx={mainContainer}>
            <Box item sx={handleMessages}>
                <Welcome />
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <PrincipleMessage />
                </Box>
            </Box>
            <Box sx={notificationContainer}>
                <NdeTabs />
            </Box>
        </Box>
    )
}

export default Notifications