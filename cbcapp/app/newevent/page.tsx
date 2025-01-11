import NewEventForm from '@/components/newEventForm'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import React from 'react'

const NewEvent = () => {
  return (
    <Paper elevation={5} sx = {{ p: 5, width: '50%', mx: 'auto'}}>
    <Typography variant='h4' textAlign={'center'} mb={3}>
      Event Details
    </Typography>  
        <NewEventForm />
    </Paper>
  )
}

export default NewEvent