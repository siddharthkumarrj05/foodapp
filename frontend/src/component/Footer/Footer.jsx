import { Box, Typography, Link, Grid } from '@mui/material';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='contact-us'>
    <Box sx={{ backgroundColor: '#333', color: '#fff', p: 4 }}>
      <Grid container spacing={4} justifyContent="space-between" sx={{margin:'0px 50px'}}>
        {/* Brand Section */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FF6347' }}>
            Foodev.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" color="inherit">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" color="inherit">
                <FaLinkedin size={24} />
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Company
          </Typography>
          <Box sx={{ mt: 2 }}>
            {["Home", "About Us", "Delivery", "Privacy Policy"].map((text) => (
              <Box key={text} sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#FF6347' } }}>
                  {text}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Get in Touch
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            +91-787-764-4233
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            contact@foodev.com
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Jaipur, Rajasthan
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, borderTop: '1px solid #555', pt: 2, textAlign: 'center' }}>
        <Typography variant="body2">
          Copyright 2024 © Foodev.com - All Rights Reserved.
        </Typography>
      </Box>
    </Box>
    </div>
  );
};

export default Footer;
