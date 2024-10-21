import { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  IconButton,
  Box,
  Typography,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SigninLoginForm = () => {
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = () => {
    console.log(isSignUp ? 'Signing Up' : 'Signing In');
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          textTransform: 'none',
          borderColor: 'black',
          color: 'black',
          borderRadius: '50px',
          fontWeight: 'medium',
          ':hover': {
            borderColor: '#ff6600',
            color: '#fff',
            backgroundColor: '#ff6600',
          },
        }}
        onClick={handleClickOpen}
      >
        Sign In
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle sx={{ backgroundColor: '#f5f5f5', p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ py: 3, px: 4 }}>
          {isSignUp ? (
            <Stack spacing={2} component="form" noValidate autoComplete="off">
              <Typography variant="body2">
                Use your email for registration:
              </Typography>
              <TextField
                margin="dense"
                label="Your name"
                fullWidth
                variant="outlined"
                size="small"
              />
              <TextField
                margin="dense"
                label="Your email"
                type="email"
                fullWidth
                variant="outlined"
                size="small"
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                size="small"
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: '#ed6537',
                  ':hover': { backgroundColor: '#d9534f' },
                }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            </Stack>
          ) : (
            <Stack spacing={2} component="form" noValidate autoComplete="off">
              <Typography variant="body2">
                Use your account credentials:
              </Typography>
              <TextField
                margin="dense"
                label="Your email"
                type="email"
                fullWidth
                variant="outlined"
                size="small"
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                size="small"
              />
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Button size="small" sx={{ background:'none', textTransform: 'none', color: '#ed6537' }}>
                  Forgot password?
                </Button>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  backgroundColor: '#ed6537',
                  ':hover': { backgroundColor: '#d9534f' },
                }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </Stack>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', backgroundColor: '#f5f5f5', py: 2 }}>
          <Button
            onClick={handleToggle}
            sx={{
              textTransform: 'none',
              color: 'inherit',
              backgroundColor: 'none',
            }}
          >
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <Typography component="span" sx={{ background:'none', color: '#ed6537', fontWeight: 'bold' }}>
                  Sign In
                </Typography>
              </>
            ) : (
              <>
                Dont have an account?{' '}
                <Typography component="span" sx={{ color: '#ed6537', fontWeight: 'bold' }}>
                  Sign Up
                </Typography>
              </>
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SigninLoginForm;
