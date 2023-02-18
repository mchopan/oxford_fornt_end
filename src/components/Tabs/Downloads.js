import { List, Typography } from "@mui/material"
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion"

const Downloads = () => {
    const scrollY = useMotionValue(0)
    const repeat = useTransform(scrollY, [0, 570], [0, -570]);
    const handleMouseEnter = () => {
        scrollY.stop()
    }
    const handleMouseLeave = () => {
        scrollY.start({ y: repeat.get(), transition: { duration: 5, ease: "linear" } })
    }
    return (
        <AnimatePresence >
            <motion.div
                style={{ overflowY: 'scroll', maxHeight: '570px' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    animate={{ y: repeat }}
                    transition={{ duration: 5, ease: "linear" }}
                    onUpdate={() => {
                        if (repeat.get() <= -570) {
                            scrollY.set(0)
                        }
                    }}
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
                            return (
                                <motion.div
                                    whileHover={{ scale: 1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <List
                                        key={item.id}
                                        sx={{
                                            color: 'red',
                                            cursor: 'pointer',
                                            margin: '5px',
                                            padding: '5px',
                                            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
                                        }}
                                    >
                                        <Typography variant="body1" color="black" sx={{ display: 'flex', justifyContent: 'space-between' }} >
                                            File Name
                                            <Typography variant="caption" color="black">
                                                Uploaded:  12/04/2023
                                            </Typography>
                                        </Typography>
                                        <Typography variant="overline" color="blue" >
                                            Download File
                                        </Typography>
                                    </List>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Downloads
