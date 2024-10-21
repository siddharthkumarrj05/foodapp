// src/EmbeddedMap.js
import { Box } from '@mui/material';

const EmbeddedMap = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '400px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 2,
                marginTop:'50px',
            }}
        >
           
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.23436938191384!2d77.49072386705895!3d27.23790503415877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a338da444f23%3A0x4722e19b1afce458!2sSS%20RIYAR%20FAMILY!5e0!3m2!1sen!2sin!4v1729333769873!5m2!1sen!2sin"
                width="100%"  // Set to 100% to take full width of the container
                height="100%" // Set to 100% to take full height of the container
                style={{ border: 0 }} // Clean border style
                allowFullScreen
                loading="lazy"
                title="Embedded Map"
            ></iframe>
        </Box>
    );
};

export default EmbeddedMap;
