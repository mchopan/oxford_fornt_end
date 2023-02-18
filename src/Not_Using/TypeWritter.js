import React, { useState, useEffect } from 'react';

function Typewriter() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const fullText = 'WELCOME TO CASET COLLEGE';

    useEffect(() => {
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            setIndex(index + 1);
            if (index === fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setIndex(0);
                }, 40000);
            }
        }, 300);
        return () => clearInterval(interval);
    }, [index]);

    return <React.Fragment>{text}</React.Fragment>
}

export default Typewriter;
