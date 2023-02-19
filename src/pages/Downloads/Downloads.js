import React from 'react'
import { motion } from 'framer-motion'

export const Downloads = () => {
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
        >Downloads</motion.div>
    )
}
