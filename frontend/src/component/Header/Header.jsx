import { Box, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        height: '34vw',
        margin: '30px 50px',
        backgroundImage: 'url(/public/header-banner.avif)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '5%',
        paddingLeft: '6vw',
      }}
    >
      <Box
        sx={{
          maxWidth: '50%',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5vw',
          animation: 'fadeIn 3s',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '22px', md: '4.5vw' },
          }}
        >
          Order your favourite food here
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '14px', md: '1.3vw' },
          }}
        >
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: 'white',
            color: '#747474',
            fontWeight: 500,
            padding: { xs: '6px 12px', md: '0.6vw 1.2vw' },
            fontSize: { xs: '12px', md: '0.9vw' },
            borderRadius: '50px',
            textTransform: 'none',
            width: '150px',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          View Menu
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
