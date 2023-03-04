import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import './style.css'
import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import { motion } from 'framer-motion'

const columns = [
    { field: 'id', headerName: 'ID', width: 70, },
    { field: 'title', headerName: 'Title', width: 130, },
    {
        field: 'description', headerName: 'Description', width: 920,
        // renderCell: (params) => (
        //     <div style={{ whiteSpace: 'normal', paddingTop: '5', fontWeight: '500', fontSize: '12px' }}>
        //         {params.value}
        //     </div>
        // ),
    },
    {
        field: 'date',
        headerName: 'Date',
        type: 'DateTimeLocale',
        width: 90,
    },
];

const rows = [
    { id: 1, title: 'Snow', description: 'lorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevn', date: '10/02/2022' },
    { id: 2, title: 'Lannister', description: 'lorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevn', date: '10/02/2022' },
    { id: 3, title: 'Lannister', description: 'lorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevn', date: '10/02/2022' },
    { id: 4, title: 'Stark', description: 'lorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevn', date: '10/02/2022' },
    { id: 5, title: 'Targaryen', description: 'lorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevn', date: null },
    { id: 6, title: 'Melisandre', description: 'lorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevn', date: '10/02/2022' },
    { id: 7, title: 'Clifford', description: 'lorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevn', date: '10/02/2022' },
    { id: 8, title: 'Frances', description: 'lorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevn', date: '10/02/2022' },
    { id: 9, lastName: 'Roxie', description: 'lorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevnlorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevnlorma nata  naaa  anan ananaa  ana anan d e  we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew  vnwevn', date: '10/02/2022' },
];


const transition = {
    duration: 0.3,
    ease: 'easeOut',
};

const variants = {
    enter: {
        x: '-100%',
        opacity: 0,
    },
    center: {
        x: 0,
        opacity: 1,
        transition,
    },
    exit: {
        x: '100%',
        opacity: 0,
        transition,
    },
};

export default function Notifications() {

    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));

    if (!isSmScreen) {
        return (
            <>
                <motion.div
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"

                >
                    <Typography variant="h2" textAlign="center" color="white" backgroundColor="gray">
                        <AcUnitIcon /><AcUnitIcon />Notif<AcUnitIcon /><AcUnitIcon />
                    </Typography>
                    <Box sx={{
                        padding: '10px',
                        margin: '5px',
                        height: 700,
                        overflowY: 'scroll',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '10px',
                        alignItems: 'center'
                    }}>
                        <Card sx={{ width: 300 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Title
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    12/02/2022
                                </Typography>
                                <Typography variant="body2">
                                    evnwev ewvwev we vnvew vnwevnlorma nata naaa anan ananaa ana anan d e we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew vnwevnlorma nata naaa anan ananaa ana anan d e we fc ewfjwef fe we vnwe f evnwev ewvwev
                                    evnwev ewvwev we vnvew vnwevnlorma nata naaa anan ananaa ana anan d e we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew vnwevnlorma nata naaa anan ananaa ana anan d e we fc ewfjwef fe we vnwe f evnwev ewvwev
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ width: 300 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Title
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    12/02/2022
                                </Typography>
                                <Typography variant="body2">
                                    evnwev ewvwev we vnvew vnwevnlorma nata naaa anan ananaa ana anan d e we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew vnwevnlorma nata naaa anan ananaa ana anan d e we fc ewfjwef fe we vnwe f evnwev ewvwev
                                    evnwev ewvwev we vnvew vnwevnlorma nata naaa anan ananaa ana anan d e we fc ewfjwef fe we vnwe f evnwev ewvwev we vnvew vnwevnlorma nata naaa anan ananaa ana anan d e we fc ewfjwef fe we vnwe f evnwev ewvwev
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </motion.div>
            </>
        )
    }

    return (
        <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"

        >
            <Typography variant="h2" textAlign="center" color="white" backgroundColor="gray">
                <AcUnitIcon /><AcUnitIcon />Notifications<AcUnitIcon /><AcUnitIcon />
            </Typography>
            <Box sx={{ height: 500, width: { xs: '100%', md: '90%' }, margin: 'auto', }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                />
            </Box>
        </motion.div>
    );
}
