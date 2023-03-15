import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Notification from '../modules/Notification';
import { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import Toast from '../components/Toast/Toast'
import { ToastContainer } from 'react-toastify';






export default function NotifyHandler() {


  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'notiName',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'notiDesc',
      headerName: 'Description',
      width: 250,
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

  const [notifyData, setNotifyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [newData, setNewData] = useState({
    notiName: '',
    notiDesc: ''
  });

  useEffect(() => {
    getNotifications();
  }, []);

  // Get
  const getNotifications = () => {
    setLoading(true)
    Notification.getAllNotifications((response) => {
      if (response.status === 'success') {
        setLoading(false)
        setNotifyData(response.data.notifications);
      } else {
        setNotifyData([]);
        setLoading(false)
      }
    });
  };

  // Update
  const handleEditCellChange = ({ id, field, value }) => {
    Notification.updateNotificationById(id, { [field]: value }, (result) => {
      if (result.status === 'success') {
        Toast({ type: 'success', message: `Notification updated successfully!` });
        console.log('Notification updated successfully:', result.data);
      } else {
        Toast({ type: 'error', message: `Error updating notification` });
        console.error('Error updating notification:', result.error);
      }
    });
  };

  const deleteRow = (event, cellValues) => {
    Notification.deleteNotificationById(cellValues.id, response => {
      if (response.status === 'success') {
        getNotifications();
        Toast({ type: 'success', message: `Notification deleted successfully!` });
        console.log('Notification deleted successfully:', response.data);
      } else {
        Toast({ type: 'error', message: `Error deleting notification` });
        console.error('Error deleting notification:', response.error);
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
    Notification.addNotification(newData, response => {
      if (response.status === 'success') {
        getNotifications();
        Toast({ type: 'success', message: `Notification added successfully!` });
        console.log('Notification saved successfully:', response.data);
      } else {
        Toast({ type: 'error', message: `Error adding notification` });
        console.error('Error saving notification:', response.error);
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
        autoHeight={false}
        rows={notifyData}
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
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNewData({ notiName: e.target.value })}
          />
          <TextField
            multiline
            rows={2}
            autoFocus
            margin="dense"
            id="desc"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNewData({ notiDesc: e.target.value })}
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