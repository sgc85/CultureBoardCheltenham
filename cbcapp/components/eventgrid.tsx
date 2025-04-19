"use client";

import { Typography, Grid2 as Grid } from "@mui/material";
import { useState } from "react";
import EventCard from "./eventcard";
import EventDetails from "./eventDetails";
import { eventType } from "@/types";

interface Props {
  events: eventType[];
}

const EventGrid = ({ events }: Props) => {
  const [focus, setFocus] = useState<eventType | null>(null);

  if (focus) {
    return <EventDetails event={focus} setFocus = {setFocus} />;
  }

  return (
    <Grid container spacing={3}>
      {events ? (
        events.map((eachEvent) => (
          <Grid key={eachEvent.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <EventCard
              event={eachEvent}
              setFocus = {setFocus}
            />
          </Grid>
        ))
      ) : (
        <Typography>No events found</Typography>
      )}
    </Grid>
  );
};

export default EventGrid;
