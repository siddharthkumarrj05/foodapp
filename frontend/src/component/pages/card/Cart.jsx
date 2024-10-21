
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, Box, Button,
//   TextField, Typography, Grid, Divider
// } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cart() {

  const {id} = useParams()
  console.log(id)

  const [singlePro,setSinglePro] = useState()

  useEffect(() => {
    const fetchFoodItems = () => {
      fetch(`http://localhost:3000/foodItems/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          setSinglePro(data)
          console.log(data)
        })
        .catch((error) => {
          console.error("Error fetching food items:", error);
        });
    };

    fetchFoodItems();
  }, [singlePro]);

  return (
    <>
    {/* <Box sx={{ maxWidth: 1240, margin: 'auto', padding: 2 }}>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Items</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <img src={singlePro.image} alt="Greek salad" style={{ width: 50, height: 50, borderRadius: 8 }} />
              </TableCell>
              <TableCell>{singlePro.name}</TableCell>
              <TableCell align="right">₹{singlePro.price}</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="right">₹12</TableCell>
              <TableCell align="center">
                <Button variant="text" color="error">x</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Cart Totals
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography>Subtotal:</Typography>
            <Typography>$12</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography>Delivery Fee:</Typography>
            <Typography>$2</Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography fontWeight="bold">Total:</Typography>
            <Typography fontWeight="bold">$14</Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color="warning" size="large">
              PROCEED TO CHECKOUT
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%', maxWidth: 500 }}>
            <TextField
              variant="outlined"
              placeholder="Enter promo code"
              size="small"
              sx={{ flex: 1 }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: '#000', color: '#fff', '&:hover': { backgroundColor: '#333' } }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box> */}
    </>
  );
}

export default Cart;
