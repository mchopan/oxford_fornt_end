import { ArrowUpward } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 400);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            style={{
                width: "50px",
                height: "50px",
                textAlign: 'center',
                position: 'fixed',
                bottom: '100px',
                right: '5px',
                zIndex: '9999',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '50%',
                cursor: 'pointer',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                pointerEvents: isVisible ? 'auto' : 'none',
            }}
        >
            <ArrowUpward />
        </button>
    );
}

export default ScrollToTopButton;
