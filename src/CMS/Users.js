import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import Toast from '../components/Toast/Toast'
import { ToastContainer } from 'react-toastify';
import User from '../modules/User/User';





export default function UsersHandler() {


    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First Name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'lastName',
            width: 150,
            editable: true,
        },
        {
            field: 'userName',
            headerName: 'Username',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
            editable: true,
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone',
            width: 150,
            editable: true,
        },
        {
            field: 'userType',
            headerName: 'User Role',
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

    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [newData, setNewData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        userName: "",
        userType: ""
    });

    useEffect(() => {
        getUsers();
    }, []);

    // Get
    const getUsers = () => {
        setLoading(true)
        User.getAllUsers((response) => {
            if (response.status === 'success') {
                setLoading(false)
                setUsersData(response.data.users);
            } else {
                setUsersData([]);
                setLoading(false)
            }
        });
    };

    // Update
    const handleEditCellChange = ({ id, field, value }) => {
        User.updateUserByID(id, { [field]: value }, (result) => {
            if (result.status === 'success') {
                Toast({ type: 'success', message: `User updated successfully!` });
                console.log('User updated successfully:', result.data);
            } else {
                Toast({ type: 'error', message: `Error updating User` });
                console.error('Error updating User:', result.error);
            }
        });
    };

    const deleteRow = (event, cellValues) => {
        User.deleteUserByID(cellValues.id, response => {
            if (response.status === 'success') {
                getUsers();
                Toast({ type: 'success', message: `User deleted successfully!` });
                console.log('User deleted successfully:', response.data);
            } else {
                Toast({ type: 'error', message: `Error deleting User` });
                console.error('Error deleting user:', response.error);
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
        User.signup(newData, response => {
            if (response.status === 'success') {
                getUsers();
                Toast({ type: 'success', message: `user created successfully!` });
                console.log('user created successfully:', response.data);
            } else {
                Toast({ type: 'error', message: `Error creating user` });
                console.error('Error creating user:', response.error);
            }
        })
        setOpen(false);
    }
    // 



    const getRowId = (row) => row._id;
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <ToastContainer />
            <Box sx={{ marginBottom: "10px", width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add New Data
                </Button>
            </Box>
            <DataGrid
                rows={usersData}
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
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="firstName"
                                label="First Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={(e) => setNewData({ ...usersData, firstName: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="lastName"
                                label="Last Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={(e) => setNewData({ ...usersData, lastName: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="userName"
                                label="Username"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={(e) => setNewData({ ...usersData, userName: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email"
                                type="email"
                                fullWidth
                                variant="standard"
                                onChange={(e) => setNewData({ ...usersData, email: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="phone"
                                label="Phone Number"
                                type="tel"
                                fullWidth
                                variant="standard"
                                onChange={(e) => setNewData({ ...usersData, phoneNumber: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel htmlFor="role">User Role</InputLabel>
                            <Select
                                onChange={(e) => setNewData({ ...usersData, userType: e.target.value })}
                                fullWidth
                                variant="standard"
                                margin="dense"
                                id="role"
                                label="Role"
                            >
                                <MenuItem value="">Select a role</MenuItem>
                                <MenuItem value="user">User</MenuItem>
                                <MenuItem value="admin">Admin</MenuItem>
                            </Select>
                        </Grid>

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Add</Button>
                </DialogActions>
            </Dialog>
        </Box >

    );
}