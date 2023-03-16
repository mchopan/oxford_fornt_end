import { Button, Card, CardActionArea, CardActions, CardMedia } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
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
        console.log(file);
        if (file) {
            const formData = new FormData();
            formData.append('photo', file);
            // Calling api to post my image
            FilesApi.uploadFile(formData, (response) => {
                console.log(response);
            });
            getImages();
        } else {
            alert('Please select an image file');
        }
    };

    // Delete

    const handleDelete = (id) => {
        FilesApi.deleteFile(id, (response) => {
            if (response.status === 'success') {
                getImages();
            }
            else {
                console.log(response.message);
            }
        })
    }


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleChange(e)}
                    style={{ fontSize: "16px", padding: "8px" }}
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
            <Box sx={{ display: 'flex', height: 530, flexWrap: 'wrap', gap: '10px' }}>
                {
                    images?.map((items, index) => {
                        return (
                            <Card sx={{ width: 180, height: 250 }}>
                                <CardActionArea sx={{ position: 'relative', height: 'calc(100% - 48px)' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        image={items.filePath}
                                        alt={items.fileName}
                                    />
                                </CardActionArea>
                                <CardActions sx={{ position: 'relative', height: '48px' }}>
                                    <Button onClick={(e) => handleDelete(items._id)} sx={{ position: 'absolute', right: 0 }} size="small" color="primary">
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