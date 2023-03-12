import { Box } from '@mui/system'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react'
import Events from './EventHandler'
import Notifications from './NotifyHandler'
import Testemionals from './TestemonialHandler'
import Downloads from './DownloadHandler'
import './styles.css'
import { Avatar, Typography } from '@mui/material';
import SignUp from '../components/Signup/Signup';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Index = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="master-container">
            <Box className="main-container">
                <Box className="navigation">
                    <Box sx={{
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        backgroundColor: "#f3f3b6"
                    }}>
                        <Avatar
                            sx={{ width: '60px', height: '60px' }}
                            src="mm"
                            alt='Manzoor'
                        />
                        <Typography variant="h5">
                            Manzoor
                        </Typography>
                    </Box>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label="Dashboard" {...a11yProps(0)} />
                        <Tab label="Notifications" {...a11yProps(1)} />
                        <Tab label="Events" {...a11yProps(2)} />
                        <Tab label="Downloads" {...a11yProps(3)} />
                        <Tab label="Testemonials" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <Box className="container">
                    <TabPanel className="table-panel" value={value} index={0}>
                        <SignUp />
                    </TabPanel>
                    <TabPanel className="table-panel" value={value} index={1}>
                        <Notifications />
                    </TabPanel >
                    <TabPanel className="table-panel" value={value} index={2}>
                        <Events />
                    </TabPanel>
                    <TabPanel className="table-panel" value={value} index={3}>
                        <Downloads />
                    </TabPanel>
                    <TabPanel className="table-panel" value={value} index={4}>
                        <Testemionals />
                    </TabPanel>
                </Box>
            </Box>
        </Box>
    )
}

export default Index