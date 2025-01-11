import { Button, FormControl, FormGroup, InputLabel, MenuItem, NativeSelect, Select, TextField } from '@mui/material'
import React from 'react'

const NewEventForm = () => {

    const locations = ["Cheltenham","Gloucester","Stroud","Cirencester","Tewkesbury"]

  return (
    <form method = "post" action = "/api/events/new">
        <FormGroup>
            <FormControl fullWidth sx = {{mb : 3}}>
                <TextField  type ="text" label = "event name" name = "eventname" />
            </FormControl>
            <FormControl fullWidth variant='outlined' sx = {{mb : 3}}>
                <InputLabel>Location</InputLabel>
                <NativeSelect variant='outlined' defaultValue={""}>
                    <option value = ""></option>
                    {
                        locations.map( (location : string, index: number) => <option value = {location} key = {index}> {location} </option>)
                    }
                </NativeSelect>
            </FormControl>

            <FormControl>
                
                <TextField type = "datetime-local">Date</TextField>
            </FormControl>

            <FormControl>
                <Button variant = "contained" type = "submit">Add Event</Button>
            </FormControl>
        </FormGroup>
    </form>
  )
}

export default NewEventForm