'use client';

import { Typography, Grid2 as Grid} from '@mui/material';
import React from 'react';
import EventCard from './eventcard';

type event = {
  id: string,
  cost: number,
  datetime: string,
  duration: string,
  maxAge: number,
  minAge: number,
  eventName: string,
  description: string,
  location: string,
  organiser: string
}

interface Props {
  events: event[]
}

const EventGrid = ({events} : Props) => {


  return (
    
    <Grid container spacing={3}>

      {events ? (
        events.map(eachEvent => (
          <Grid key={eachEvent.id} size = {{xs: 12, sm: 6,  md: 4 }} >
            <EventCard event={eachEvent} />
          </Grid>
        ))
      ) : (
        <Typography>No events found</Typography>
      )}
    </Grid>

  );
};

export default EventGrid;
