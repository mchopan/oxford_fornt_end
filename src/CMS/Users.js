import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Delete, Visibility, VisibilityOff } from '@mui/icons-material';
import Toast from '../components/Toast/Toast'
import User from '../modules/User/User';
import { validateEmail, validatePassword } from '../utils/utils';




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

    const [showPassword, setShowPassword] = useState(false);
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [newData, setNewData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        userName: "",
        userType: "",
        password: ""
    });
    const [error, setError] = useState({
        emailError: false,
        passwordError: false,
        userNameError: false,
    });

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setNewData({ ...newData, email: email });
        setError({ ...error, emailError: !validateEmail(email) });
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setNewData({ ...newData, password: password });
        setError({ ...error, passwordError: !validatePassword(password) });
    };

    const handleUserNameChange = (e) => {
        const userName = e.target.value;
        setNewData({ ...newData, userName: userName });
        User.findUsername(userName, response => {
            if (response.status === 'success') {
                setError({ ...error, userNameError: true });
            } else {
                setError({ ...error, userNameError: false });
            }
        })
    };


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
        <Box sx={{ height: 520, width: '100%' }}>
            <Box sx={{ marginBottom: "10px", width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add New User
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
                <DialogTitle sx={{ textAlign: 'center' }}>Add New User</DialogTitle>
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
                                onChange={(e) => setNewData({ ...newData, firstName: e.target.value })}
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
                                onChange={(e) => setNewData({ ...newData, lastName: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="username"
                                label="Username"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={newData.userName}
                                onChange={handleUserNameChange}
                                error={Boolean(error.userNameError)}
                                helperText={error.userNameError && "username already taken"}
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
                                value={newData.email}
                                onChange={handleEmailChange}
                                error={Boolean(error.emailError)}
                                helperText={error.emailError && "enter a valied email address"}
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
                                onChange={(e) => setNewData({ ...newData, phoneNumber: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={newData.password}
                                    onChange={handlePasswordChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                {error.passwordError && <span style={{ fontWeight: '500', fontSize: "9px", color: 'red' }}>Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.</span>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel htmlFor="role">User Role</InputLabel>
                            <Select
                                onChange={(e) => setNewData({ ...newData, userType: e.target.value })}
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