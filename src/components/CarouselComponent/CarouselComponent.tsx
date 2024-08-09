import React from 'react';
import Slider from 'react-slick';
import { Paper } from '@mui/material';
import { motion } from 'framer-motion';
import './CarouselComponent.css';

const images = [
  '/assets/images/ColummsMe.jpg',
  '/assets/images/MoultonTrip.jpg',
  '/assets/images/RapidreelsWork.JPG',
  '/assets/images/Rapidreels#1.JPG',
];

const CarouselComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Paper className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={img} alt={`carousel-${index}`} className="carousel-image" />
          </motion.div>
        ))}
      </Slider>
    </Paper>
  );
};

export default CarouselComponent;


