import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import React from 'react'

type EventType = {
  minAge : number,
  maxAge: number,
  cost: number,
  datetime : string,
  description : string,
  duration : string,
  eventName : string,
  location : string,
  organiser : string
}

interface Props {
  event: EventType
}

const EventCard = ( { event } : Props )  => {
  // console.log(event)
  return (
    <Card>
    <CardContent>
        <Typography variant='h6'>{event.eventName}</Typography>
        <Typography variant='body1' color='text.secondary'>{event.location}</Typography>
        <Typography variant='body1'>{event.description}</Typography>

        <CardActions>
            <Button variant = "outlined">More Info</Button>
        </CardActions>
    </CardContent>
</Card>
  )
}

export default EventCard