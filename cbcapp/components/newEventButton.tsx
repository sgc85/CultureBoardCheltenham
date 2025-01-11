import { IconButton } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const NewEventButton = () => {
  return (
    <IconButton href = "/newevent">
        <AddCircleOutlineIcon  sx = {{ color :'white', fontSize: '32px'}} /> 
    </IconButton>
  )
}

export default NewEventButton