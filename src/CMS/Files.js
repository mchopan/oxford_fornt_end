import { Button, Card, CardActionArea, CardActions, CardMedia } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Toast from '../components/Toast/Toast'
import FilesApi from '../modules/Files/index'

const Files = () => {

    const [file, setFile] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages();
    }, [])


    const getImages = () => {
        FilesApi.getFiles(response => {
            console.log(response);
            if (response.status === 'success') {
                setImages(response.data.files);
            }
            else {
                console.log(response.message);
            }
        })
    }

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append('photo', file);
            // Calling api to post my image
            FilesApi.uploadFile(formData, (response) => {
                if (response.status === 'success') {
                    Toast({ type: 'success', message: `Image Uploaded successfully!` });
                    getImages();
                    console.log(response);
                }
                else {
                    Toast({ type: 'error', message: `Error uploading Image` });
                    console.error('Error uploading image:', response.error);
                }
            });
        } else {
            Toast({ type: 'warn', message: `Please select an image file` });
        }
    };

    // Delete

    const handleDelete = (event, id) => {
        event.preventDefault();
        if (window.confirm('Are you sure you want to delete this image?')) {
            FilesApi.deleteFile(id, response => {
                if (response.status === 'success') {
                    getImages();
                    Toast({ type: 'success', message: `Image deleted successfully!` });
                    console.log('Image deleted successfully:', response.data);
                } else {
                    Toast({ type: 'error', message: `Error deleting Image` });
                    console.error('Error deleting image:', response.error);
                }
            })
        }
    }


    return (
        <>
            <Box sx={{ display: 'flex', marginTop: "-10px", padding: "5px", justifyContent: 'flex-end' }}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleChange(e)}
                />
                <Button
                    variant="contained"
                    component="label"
                    onClick={handleSubmit}
                    size='small'
                >
                    Upload Image
                </Button>
            </Box>
            <Box sx={{ display: 'flex', height: 530, overflowY: "scroll", flexWrap: 'wrap', gap: '10px' }}>
                {
                    images?.map((items, index) => {
                        return (
                            <Card sx={{ width: 190, height: 250 }}>
                                <CardActionArea sx={{ position: 'relative', height: 'calc(100% - 48px)' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        image={items.filePath}
                                        alt={items.fileName}
                                    />
                                </CardActionArea>
                                <CardActions sx={{ position: 'relative', height: '48px' }}>
                                    <Button onClick={(e) => handleDelete(e, items.publicId)} sx={{ position: 'absolute', right: 0 }} size="small" color="primary">
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default Files