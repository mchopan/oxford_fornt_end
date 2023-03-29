import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Testemionals from '../modules/Testemionals/index';
import { useState, useEffect } from 'react';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import Toast from '../components/Toast/Toast'






export default function Testimonals() {


    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },

        {
            field: 'PhotoURL', headerName: 'Profile', width: 100, editable: false,
            renderCell: (params) => (
                <Avatar
                    src={params.value}
                    sx={{ width: 50, height: 50 }}
                />

            )
        },
        {
            field: 'RName',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'RExpert',
            headerName: 'Profician',
            width: 150,
            editable: true,
        },
        {
            field: 'RMessage',
            headerName: 'Message',
            width: 150,
            editable: true,
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            type: 'Date',
            width: 170,
            editable: false,
            valueFormatter: (params) =>
                new Date(params.value).toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                }),
        },
        {
            field: 'updatedAt',
            headerName: 'Updated At',
            sortable: true,
            width: 155,
            valueFormatter: (params) => {
                const utcDate = new Date(params.value);
                const date = new Date(params.value);
                if (isNaN(date)) {
                    return '';
                }
                const localDate = new Date(utcDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
                return localDate.toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                });
            },
        },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: (cellValues) => {
                return (
                    <IconButton
                        variant="contained"
                        color="primary"
                        onClick={(event) => {
                            deleteRow(event, cellValues);
                        }}
                    >
                        <Delete fonstSize="small" color="error" />
                    </IconButton>
                );
            }
        }
    ];

    const [testemData, setTestemData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [newData, setNewData] = useState({
        RName: '',
        RExpert: '',
        RMessage: '',
        RImage: ''
    });

    useEffect(() => {
        getAllTestemionals();
    }, []);

    // Get
    const getAllTestemionals = () => {
        setLoading(true)
        Testemionals.getAllTestem((response) => {
            if (response.status === 'success') {
                setLoading(false)
                setTestemData(response.data.testems);
            } else {
                setTestemData([]);
                setLoading(false)
            }
        });
    };

    // Update
    const handleEditCellChange = ({ id, field, value }) => {
        Testemionals.updateTestemById(id, { [field]: value }, (result) => {
            if (result.status === 'success') {
                Toast({ type: 'success', message: `Testemional updated successfully!` });
                console.log('Testemional updated successfully:', result.data);
            } else {
                Toast({ type: 'error', message: `Error updating notification` });
                console.error('Error updating Testemional:', result.error);
            }
        });
    };

    const deleteRow = (event, cellValues) => {
        Testemionals.deleteTestemById(cellValues.id, response => {
            if (response.status === 'success') {
                getAllTestemionals();
                Toast({ type: 'success', message: `Testemional deleted successfully!` });
                console.log('Testemional deleted successfully:', response.data);
            } else {
                Toast({ type: 'error', message: `Error deleting notification` });
                console.error('Error deleting Testemional:', response.error);
            }
        })
    }

    // Handle Dialoge
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        const formData = new FormData();
        formData.append('RName', newData.RName);
        formData.append('RExpert', newData.RExpert);
        formData.append('RMessage', newData.RMessage);
        formData.append('doc', newData.RImage);

        Testemionals.addTestem(formData, (response) => {
            if (response.status === 'success') {
                getAllTestemionals();
                Toast({ type: 'success', message: `Testimonial added successfully!` });
                console.log('Testimonial saved successfully:', response.data);
                setNewData({ ...newData, RImage: null });
            } else {
                Toast({ type: 'error', message: `Error adding testimonial` });
                console.error('Error saving testimonial:', response.error);
            }
        });
        setOpen(false);
    };

    // 

    const handleImageChange = (e) => {
        setNewData({ ...newData, RImage: e.target.files[0] });
    };



    const getRowId = (row) => row._id;
    return (
        <Box sx={{ height: 520, width: '100%' }}>
            <Box sx={{ marginBottom: "10px", width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add New Data
                </Button>
            </Box>
            <DataGrid
                rows={testemData}
                columns={columns}
                getRowId={getRowId}
                loading={loading}
                onCellEditCommit={handleEditCellChange}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
            />

            {/* Dialouge To add new data */}
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Add New Notification</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>
                        <Avatar
                            src={newData.RImage ? URL.createObjectURL(newData.RImage) : ''}
                            style={{ width: 100, height: 100, marginBottom: 10 }}
                        />
                        <input
                            accept="image/*"
                            id="image-upload"
                            type="file"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="image-upload">
                            <Button variant="contained" color="primary" component="span">
                                Upload Image
                            </Button>
                        </label>
                    </Box>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="Rname"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNewData({ ...newData, RName: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="RExpert"
                        label="Profician"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNewData({ ...newData, RExpert: e.target.value })}
                    />
                    <TextField
                        multiline
                        rows={2}
                        autoFocus
                        margin="dense"
                        id="RMessage"
                        label="Message"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNewData({ ...newData, RMessage: e.target.value })}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Add</Button>
                </DialogActions>
            </Dialog>
        </Box>

    );
}