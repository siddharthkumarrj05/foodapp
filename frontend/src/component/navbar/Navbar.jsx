import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  TextField,
  InputAdornment,
  Grid,
  Menu,
  MenuItem,
  useMediaQuery,
  Badge,
} from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import logo from '../../../public/Logo.png';
import SigninLoginForm from '../SinginForm/Signin-Login';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleSearchClick = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
    setSearchQuery('');
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #ddd'}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mx: '50px' }}>
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '16px' }} />
        </Link>
        
        {!isMobile ? (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item>
                <Button
                  component={NavLink}
                  to="/"
                  color="inherit"
                  activeClassName="active" 
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'medium',
                    color: 'black',
                    '&:hover': {
                      color: '#ff0000',
                      backgroundColor: 'transparent',
                    },
                    '&.active': {
                      borderBottom: '2px solid #ff0000',
                      color: '#ff0000',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  Home
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component="a"
                  href="#Exploremenu"
                  color="inherit"
                  activeClassName="active"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'medium',
                    color: 'black',
                    '&:hover': {
                      color: '#ff0000',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  Menu
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component="a"
                  href="#App-download"
                  color="inherit"
                  activeClassName="active" 
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'medium',
                    color: 'black',
                    '&:hover': {
                      color: '#ff0000',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  Mobile App
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component="a"
                  href="#contact-us"
                  color="inherit"
                  activeClassName="active"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'medium',
                    color: 'black',
                    '&:hover': {
                      color: '#ff0000',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={NavLink} to="/" onClick={handleMenuClose} activeClassName="active">
                Home
              </MenuItem>
            </Menu>
          </>
        )}

        {/* Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {showSearch ? (
            <TextField
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              autoFocus
              sx={{ width: { xs: 150, sm: 250 } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearchClose}>
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <IconButton color="inherit" onClick={handleSearchClick} sx={{ color: 'gray' }}>
              <SearchIcon />
            </IconButton>
          )}
          
          <IconButton sx={{ marginRight: '10px' }} component={Link} to="/card">
            <Badge badgeContent={0} showZero color="success">
              <ShoppingBasketIcon color="action" />
            </Badge>
          </IconButton>
          <SigninLoginForm/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
