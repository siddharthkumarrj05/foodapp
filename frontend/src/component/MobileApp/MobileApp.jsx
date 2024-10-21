import { Box, Typography } from '@mui/material';
import googleplay from './googleplay.png';
import appstore from './appstore.png';

const DownloadSection = () => {
  return (
    <div id='App-download'>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 2,
        padding: 4,
        margin:'50px 0px'
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        For Better Experience Download <br /> 
        <span style={{ color: '#ff6600' }}>Foodev App</span>
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box
          component="a"
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'inline-block' }}
        >
          <Box
            component="img"
            src={googleplay}
            alt="Get it on Google Play"
            sx={{ height: 40, width: 'auto' }}
          />
        </Box>
        <Box
          component="a"
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'inline-block' }}
        >
          <Box
            component="img"
            src={appstore}
            alt="Download on the App Store"
            sx={{ height: 40, width: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
    </div>
  );
};

export default DownloadSection;
