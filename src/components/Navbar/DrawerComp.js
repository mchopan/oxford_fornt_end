import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import { IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const pages = ["Home", "About", "Admission", "Notification", "Downloads", "Courses", "Contact"]

    // styling 
    const tabSX = {
        color: "inherit",
        transition: "all 0.5s ease",
        "&:hover": {
            backgroundColor: "#FF5722",
            color: "white",
        }
    }

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List sx={{ marginLeft: "auto", marginTop: "-8px" }} >
                    {
                        pages.map((page, index) => (
                            <ListItemButton sx={tabSX} onClick={() => setOpenDrawer(false)}>
                                <ListItemIcon>
                                    <ListItemText >{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>

        </>
    )
}

export default DrawerComp