import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import StaffMembers from '../modules/Staff/index';
import { useState, useEffect } from 'react';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import Toast from '../components/Toast/Toast'


export default function StaffHandler() {


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
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'expert',
            headerName: 'Education',
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

    const [staffMembersData, setStaffMembersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [newData, setNewData] = useState({
        name: '',
        expert: '',
        photo: ''
    });

    useEffect(() => {
        getAllStaffMembers();
    }, []);

    // Get
    const getAllStaffMembers = () => {
        setLoading(true)
        StaffMembers.getAllStaffMember((response) => {
            if (response.status === 'success') {
                setLoading(false)
                setStaffMembersData(response.data.staff);
            } else {
                setStaffMembersData([]);
                setLoading(false)
            }
        });
    };

    // Update
    const handleEditCellChange = ({ id, field, value }) => {
        StaffMembers.updateStaffMemberById(id, { [field]: value }, (result) => {
            if (result.status === 'success') {
                Toast({ type: 'success', message: `Staff Member updated successfully!` });
                console.log('Staff Member updated successfully:', result.data);
            } else {
                Toast({ type: 'error', message: `Error updating Staff Member` });
                console.error('Error updating Staff Member:', result.error);
            }
        });
    };

    const deleteRow = (event, cellValues) => {
        StaffMembers.deleteStaffMemberById(cellValues.id, response => {
            if (response.status === 'success') {
                getAllStaffMembers();
                Toast({ type: 'success', message: `Staff Member deleted successfully!` });
                console.log('Staff Member deleted successfully:', response.data);
            } else {
                Toast({ type: 'error', message: `Error deleting Staff Member` });
                console.error('Error deleting Staff Member:', response.error);
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
        formData.append('name', newData.name);
        formData.append('expert', newData.expert);
        formData.append('photo', newData.photo);

        StaffMembers.addStaffMember(formData, (response) => {
            if (response.status === 'success') {
                getAllStaffMembers();
                Toast({ type: 'success', message: `Staff Member added successfully!` });
                console.log('Staff Member saved successfully:', response.data);
                setNewData({ ...newData, photo: null });
            } else {
                Toast({ type: 'error', message: `Error adding Staff Member` });
                console.error('Error saving Staff Member:', response.error);
            }
        });
        setOpen(false);
    };

    // 

    const handleImageChange = (e) => {
        setNewData({ ...newData, photo: e.target.files[0] });
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
                rows={staffMembersData}
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
                <DialogTitle>Add New Staff Member</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>
                        <Avatar
                            src={newData.photo ? URL.createObjectURL(newData.photo) : ''}
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
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNewData({ ...newData, name: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="expert"
                        label="Profician"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNewData({ ...newData, expert: e.target.value })}
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