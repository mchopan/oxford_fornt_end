import { Box } from "@mui/material";
import Notifications from "../../components/Notifications/Notifications";




function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Notifications />
        </Box>
    );
}

export default Home;
// 