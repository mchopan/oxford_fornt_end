import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 20;

function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const fetchItems = async () => {
        setIsLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page * ITEMS_PER_PAGE}&_limit=${ITEMS_PER_PAGE}`);
        const data = await response.json();
        setIsLoading(false);
        if (data.length > 0) {
            setItems(prevItems => [...prevItems, ...data]);
            setPage(prevPage => prevPage + 1);
        } else {
            setHasMore(false);
        }
    };

    const handleScroll = event => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (scrollHeight - scrollTop === clientHeight && !isLoading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handleTouchMove = event => {
        const { scrollTop, clientHeight, scrollHeight } = event.target;
        if (scrollHeight - scrollTop === clientHeight && !isLoading) {
            setPage(prevPage => prevPage + 1);
        }
    };


    useEffect(() => {
        fetchItems();
    }, []);

    useEffect(() => {
        if (page > 0) {
            fetchItems();
        }
    }, [page]);


    // styles

    const BoxStyle = {
        color: 'black',
    }

    const transition = {
        duration: 0.3,
        ease: 'easeOut',
    };

    const variants = {
        enter: {
            x: '-100%',
            opacity: 0,
        },
        center: {
            x: 0,
            opacity: 1,
            transition,
        },
        exit: {
            x: '100%',
            opacity: 0,
            transition,
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
        >
            <Typography variant="h3" textAlign="center" color="white" backgroundColor="gray">
                <AcUnitIcon /><AcUnitIcon />Notifications<AcUnitIcon /><AcUnitIcon />
            </Typography>
            <Grid container spacing={2} onTouchMove={handleTouchMove} onScroll={handleScroll} sx={{ padding: '10px', marginTop: '0px', height: '70vh', overflowY: 'scroll', }}>
                {items.slice(0, (page + 1) * 20).map(post => (
                    <Grid item key={post}>
                        <Box sx={BoxStyle} key={post.id}>
                            <Typography variant="h6" color="initial">{post.title}</Typography>
                            <Typography variant="body"> {post.body}</Typography>
                        </Box>
                    </Grid>
                ))}
                {isLoading && (
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                        <CircularProgress />
                    </Grid>
                )}
                {!hasMore && (
                    <Grid item xs={12}>
                        <p>No more items to load</p>
                    </Grid>
                )}
            </Grid>
        </motion.div>
    );
}

export default Home;
// 