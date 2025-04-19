'use client'

import { Box, CircularProgress, Typography } from "@mui/material";
import Filter from "@/components/filter"
import { useGetEvents } from "@/hooks/useGetEvents";
import EventGrid from "@/components/eventgrid";
import { pink } from '@mui/material/colors';

export default function Home() {

  const {fetchEvents, events, loading, error} = useGetEvents()
  
  if (loading) return <CircularProgress /> 

  if (events) {
    if (events.length > 0) return <EventGrid events = {events}/>
  }

  return (

    <Box>
      <Typography variant="h3" textAlign='center' color = "text.primary">
        Welcome to the CBC Event Hub
      </Typography>

      <Typography variant="body2" textAlign='center' color="text.primary">
        This is lots of exciting information about the charity...
      </Typography>


      <Filter fetchEvents = {fetchEvents}/>
    
    </Box>
  );
}
