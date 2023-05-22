import React from 'react'
import { Box } from '@mui/material';


function ProgressBar() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <ProgressBar value={progress} />
            </Box>
        </div>
    )
}

export default ProgressBar