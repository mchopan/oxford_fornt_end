import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import StaffMembers from '../../modules/Staff/index'

export default function Staff() {

    const [staff, setStaff] = React.useState([])

    React.useEffect(() => {
        getAllStaffMembers();
    }, [])

    const getAllStaffMembers = () => {
        StaffMembers.getAllStaffMember(response => {
            if (response.status === 'success') {
                setStaff(response.data.staff);
            }
        })
    }

    return (
        <>
            <Typography variant="h6" color='#0077c2' textAlign='center'>
                Meet The Crew
            </Typography>
            <Box sx={{ flexWrap: "wrap", display: "flex", gap: "10px", justifyContent: "center", marginTop: "10px" }}>
                {
                    staff.map((card, index) => (
                        <Card sx={{ width: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200px"
                                    image={card.PhotoURL}
                                    alt={card.name}
                                />
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.name}
                                    </Typography>
                                    <Typography variant="caption">
                                        {card.expert}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
            </Box>
        </>
    );
}