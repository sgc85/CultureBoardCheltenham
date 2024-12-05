import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import React from 'react'

const EventCard = () => {
  return (
    <Card>
    <CardContent>
        <Typography variant='h6'>Event Title</Typography>
        <Typography variant='body1' color='text.secondary'>Location</Typography>
        <Typography variant='body1'>This is a description of the event...</Typography>

        <CardActions>
            <Button variant = "outlined">More Info</Button>
        </CardActions>
    </CardContent>
</Card>
  )
}

export default EventCard