import { useEffect, useState, useRef } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemButton,
  Paper,
  IconButton,
} from "@mui/material";
import { Add, Remove } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Link} from 'react-router-dom'

function FoodItemCard({ filter }) {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const fetchFoodItems = () => {
      fetch("http://localhost:3000/foodItems")
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch");
          return response.json();
        })
        .then((data) => {
          // Add a quantity property to each item
          const itemsWithQuantity = data.map(item => ({ ...item, quantity: 1 }));
          setItems(itemsWithQuantity);
        })
        .catch((error) => {
          console.error("Error fetching food items:", error);
        });
    };

    fetchFoodItems();
  }, []);

  const handleIncrease = (item) => {
    setItems(prevItems =>
      prevItems.map(prevItem =>
        prevItem.id === item.id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem
      )
    );
  };

  const handleDecrease = (item) => {
    setItems(prevItems =>
      prevItems.map(prevItem =>
        prevItem.id === item.id && prevItem.quantity > 1
          ? { ...prevItem, quantity: prevItem.quantity - 1 }
          : prevItem
      )
    );
  };

  const filteredItems = items.filter((item) => {
    const matchesFilter = filter === "all" || item.tags.includes(filter);
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    if (searchQuery) {
      const matchingSuggestions = items
        .filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5);
      setSuggestions(matchingSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, items]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Box p={2} pb={0} sx={{ margin: "0 50px" }}>
        <Divider />
        <Typography variant="h4" component="h1" my={4} fontWeight="bold">
          Top dishes near you
        </Typography> 

        <Box
          mb={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
          ref={searchRef}
        >
          <TextField
            label="Search items..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: "100%", maxWidth: 400 }}
          />

          {suggestions.length > 0 && (
            <Paper
              sx={{
                width: "100%",
                maxWidth: 400,
                position: "absolute",
                top: "100%",
                zIndex: 10,
              }}
            >
              <List>
                {suggestions.map((suggestion, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setSearchQuery(suggestion.name);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion.name}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Box>
        
        <Grid container spacing={2} p={2}>
          {filteredItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    loading="lazy"
                    sx={{
                      height: 200,
                      borderRadius: "8px",
                      backgroundColor: "#f0f0f0",
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: 1,
                      p: 0.5,
                    }}
                  >
                    <IconButton size="small" onClick={() => handleDecrease(item)}>
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography variant="body2" mx={0.5}>
                      {item.quantity}
                    </Typography>
                    <IconButton size="small" onClick={() => handleIncrease(item)}>
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={1}
                  >
                    <Typography variant="h6" fontWeight="bold" noWrap>
                      {item.name}
                    </Typography>
                    <Box sx={{backgroundColor:'green',borderRadius:'5px',color:'#fff',padding:'0px 5px'}}>{item.rating} ★</Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {item.description}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight="bold" sx={{color:'#FF6347'}}>
                    ₹{item.price}
                    </Typography>

                    <Link to={`/card/${item.id}`}>
                      <AddCircleIcon sx={{ fontSize: 40, color: 'grey' }} />
                    </Link>

                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default FoodItemCard;
