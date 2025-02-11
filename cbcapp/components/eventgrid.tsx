'use client';

import { CircularProgress, Grid2 as Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EventCard from './eventcard';

const EventGrid = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events/get');
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch events');
        }

        setEvents(data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Grid container spacing={3}>
      {events.length > 0 ? (
        events.map(event => (
          <Grid key={event.id} size = {{xs: 12, sm: 6,  md: 4 }} >
            <EventCard event={event} />
          </Grid>
        ))
      ) : (
        <p>No events found.</p>
      )}
    </Grid>
  );
};

export default EventGrid;
