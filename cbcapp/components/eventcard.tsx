import { eventType } from '@/types'
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import React from 'react'


interface Props {
  event: eventType
  setFocus: React.Dispatch<React.SetStateAction<eventType | null>>
}

const EventCard = ( { event, setFocus } : Props )  => {
  // console.log(event)
  return (
    <Card>
    <CardContent>
        <Typography variant='h6'>{event.eventName}</Typography>
        <Typography variant='body1' color='text.secondary'>{event.location}</Typography>
        <Typography variant='body1'>{event.description}</Typography>

        <CardActions>
            <Button variant = "outlined" onClick={ () => setFocus(event) }>More Info</Button>
        </CardActions>
    </CardContent>
</Card>
  )
}

export default EventCard