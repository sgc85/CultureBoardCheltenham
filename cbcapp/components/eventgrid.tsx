import { Grid2 as Grid } from '@mui/material'
import React from 'react'
import EventCard from './eventcard'


const eventList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const EventGrid = () => {
  return (
    <Grid container spacing={3}>
        {
            eventList.map( (details) => (
                <Grid key = {details} size = {4}>
                    <EventCard />
                </Grid>
            ))
        }
    </Grid>
  )
}

export default EventGrid