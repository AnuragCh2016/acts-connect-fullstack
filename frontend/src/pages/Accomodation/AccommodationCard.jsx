import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const AccommodationCard = ({ image, title, address, price }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AccommodationCard;
