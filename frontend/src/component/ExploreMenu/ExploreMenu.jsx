
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const MenuSlider = ({ setFilter }) => {
  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const fetchFoodItems = () => {
      fetch('http://localhost:3001/menuItem')
        .then(response => {
          if (!response.ok) throw new Error('Failed to fetch');
          return response.json();
        })
        .then(data => {
          setItems(data);
        })
        .catch(error => {
          console.error("Error fetching food items:", error);
        });
    };

    fetchFoodItems();
  }, []);

  const handleItemClick = (index) => {
    setActiveItem(index);
    const selectedItem = items[index];
    setFilter(selectedItem.name.toLowerCase());
  };

  return (
    <div id='Exploremenu'>
      <Box p={4} sx={{ margin: '30px 50px' }}>
        <Typography variant="h4" component="h2" fontWeight="bold" mb={2}>
          Explore our menu
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4} maxWidth="md">
          Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </Typography>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          className="mySwiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                onClick={() => handleItemClick(index)}
                sx={{ cursor: 'pointer' }}
              >
                <Box
                  sx={{
                    border: activeItem === index ? '4px solid #FF6347' : 'none',
                    borderRadius: '50%',
                    padding: activeItem === index ? '3px' : '0',
                    display: 'inline-block',
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    sx={{
                      width: 144,
                      height: 144,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      boxShadow: 3,
                    }}
                  />
                </Box>
                <Typography variant="h6" color="text.secondary" mt={2}>
                  {item.name}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default MenuSlider;
