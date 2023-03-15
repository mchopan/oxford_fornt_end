import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import Testemionals from '../modules/Testemionals';

const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
        field: 'RName',
        headerName: 'Name',
        width: 150,
        editable: false,
    },
    {
        field: 'RExpert',
        headerName: 'Expert',
        width: 150,
        editable: true,
    },
    {
        field: 'RMessage',
        headerName: 'Message',
        width: 200,
        editable: true,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        type: 'Date',
        width: 150,
        editable: false,
        valueFormatter: (params) => {
            const utcDate = new Date(params.value);
            const date = new Date(params.value);
            if (isNaN(date)) {
                return '';
            }
            const localDate = new Date(utcDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
            return localDate.toLocaleString('en-IN', {
                dateStyle: 'short',
                timeStyle: 'short',
            });
        },
    },
    {
        field: 'updatedAt',
        headerName: 'Updated At',
        type: 'Date',
        width: 150,
        editable: false,
        valueFormatter: (params) => {
            const utcDate = new Date(params.value);
            const date = new Date(params.value);
            if (isNaN(date)) {
                return '';
            }
            const localDate = new Date(utcDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
            return localDate.toLocaleString('en-IN', {
                dateStyle: 'short',
                timeStyle: 'short',
            });
        },

    },

];


export default function TestemonialHandler() {

    const [testem, setTestem] = useState([])

    console.log(testem)
    React.useEffect(() => {
        getAllTestemionals();
    }, [])

    const getAllTestemionals = () => {
        Testemionals.getAllTestem(response => {
            if (response.status === 'success') {
                setTestem(response.data.testems)
            }
            else {
                console.log("eroor")
                setTestem([])
            }
        })
    }
    const getRowId = (row) => row._id;

    return (
        <>
            <Box>

            </Box>
            <Box sx={{ height: 520, width: '100%' }}>
                <DataGrid
                    getRowId={getRowId}
                    rows={testem}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </>
    );
}