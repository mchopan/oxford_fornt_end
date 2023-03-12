import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Event from '../modules/Events/index';
import { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import Toast from '../components/Toast/Toast'
import { ToastContainer } from 'react-toastify';
import moment from 'moment';




export default function NotifyHandler() {
  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'eventName',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'eventDesc',
      headerName: 'Description',
      width: 250,
      editable: true,
    },
    {
      field: 'eventTime',
      headerName: 'Date',
      type: 'dateTime',
      width: 150,
      editable: true,
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
      field: 'createdAt',
      headerName: 'Created At',
      type: 'date',
      width: 150,
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
      width: 150,
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
      width: 70,
      sortable: false,
      menubar: false,
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

  const [eventData, seteventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [newData, setNewData] = useState({
    eventName: '',
    eventDesc: '',
    eventTime: moment()
  });

  useEffect(() => {
    getAllEvents();
  }, []);

  // Get
  const getAllEvents = () => {
    setLoading(true)
    Event.getAllEvents((response) => {
      if (response.status === 'success') {
        setLoading(false)
        seteventData(response.data.events);
      } else {
        seteventData([]);
        setLoading(false)
      }
    });
  };

  // Update
  const handleEditCellChange = ({ id, field, value }) => {
    Event.updateEventById(id, { [field]: value }, (result) => {
      if (result.status === 'success') {
        Toast({ type: 'success', message: `Event updated successfully!` });
        console.log('Event updated successfully:', result.data);
      } else {
        Toast({ type: 'error', message: `Error updating Event` });
        console.error('Error updating Event:', result.error);
      }
    });
  };

  const deleteRow = (event, cellValues) => {
    Event.deleteEventById(cellValues.id, response => {
      if (response.status === 'success') {
        getAllEvents();
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
    Event.addEvent(newData, response => {
      if (response.status === 'success') {
        getAllEvents();
        Toast({ type: 'success', message: `Event added successfully!` });
        console.log('Event saved successfully:', response.data);
      } else {
        Toast({ type: 'error', message: `Error adding Event` });
        console.error('Error saving event:', response.error);
      }
    })
    setOpen(false);
  }
  // 

  const getRowId = (row) => row._id;
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <ToastContainer />
      <Box sx={{ marginBottom: "10px", width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add New Data
        </Button>
      </Box>
      <DataGrid
        rows={eventData}
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
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNewData({ eventName: e.target.value })}
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
            onChange={(e) => setNewData({ eventDesc: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="desc"
            label="Date"
            type="datetime-local"
            fullWidth
            variant="standard"
            onChange={(e) => setNewData({ eventTime: e.target.value })}
            InputLabelProps={{ shrink: true }}
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