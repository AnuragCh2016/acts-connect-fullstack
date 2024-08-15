import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import AccommodationCard from './AccommodationCard'; 

const accommodations = [
  {
    id: 1,
    title: 'Madhur',
    address: 'Madhurkunj',
    price: '₹5000/month',
    image: 'https://source.unsplash.com/random/800x600?house',
  },
  {
    id: 2,
    title: 'Om',
    address: 'Madhurkunj',
    price: '₹4500/month',
    image: 'https://source.unsplash.com/random/800x600?room',
  },
];

const AccommodationPage = () => {
  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid className="relative " item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar /> {/* Sidebar Component */}
          </div>
        </Grid>
        <Grid item lg={9} xs={12}>
          <Container>
            <Typography variant="h4" component="h1" gutterBottom>
              Nearby PGs and Rooms
            </Typography>
            <Grid container spacing={3}>
              {accommodations.map((accommodation) => (
                <Grid item xs={12} sm={6} md={4} key={accommodation.id}>
                  <AccommodationCard
                    image={accommodation.image}
                    title={accommodation.title}
                    address={accommodation.address}
                    price={accommodation.price}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccommodationPage;
