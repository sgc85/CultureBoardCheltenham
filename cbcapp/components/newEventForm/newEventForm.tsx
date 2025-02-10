'use client'
import { Button, FormControl, FormControlLabel, FormGroup, InputAdornment, InputLabel, OutlinedInput, Slider, Switch, TextField, Typography } from '@mui/material'

import { FormHelperText } from '@mui/material';
import Paper from '@mui/material/Paper'
import React, { useState } from 'react'
import RepeatEventSelect from './repeatEventSelect';
import { useRouter } from 'next/navigation';


const NewEventForm = () => {
   const router = useRouter();
   const [isRepeatEvent, setIsRepeatEvent] = useState<boolean>(false)
   const [error, setError] = useState<string | null>(null);
   const [ageRange, setAgeRange] = useState<number[]>([0, 25])

   const handleRepeatEventChange = () => {
    setIsRepeatEvent(!isRepeatEvent)
   }



    const handleAgeRangeChange = (event: Event, newValue: number | number[]) => {
        console.log("age changing...", newValue);
    
        // Ensure newValue is an array before setting the state
        if (Array.isArray(newValue)) {
            setAgeRange([...newValue]); // Create a new array to trigger state update
        }
    };
   

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const res = await fetch("/api/events/add", { method: "POST", body: formData });
        const result = await res.json();
    
        if (result.success) {
          router.push(`${result.redirectUrl}?status=success&message=${encodeURIComponent(result.message)}`);
        } else {
          setError(result.message);
          router.push(`${result.redirectUrl}?status=error&message=${encodeURIComponent(result.message)}`);
        }
      };
   
const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 25,
      label: '25',
    }
  ];

  return (
    <Paper elevation={5} sx = {
        {
            width: "50%",
            mx: 'auto',
            p: 5
        }
        }>
            <Typography variant='h4' textAlign={'center'} sx = {{mb: 3}}>Add New Event</Typography>

            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormControl sx = {{mb : 3}}>
                        <TextField type = "text" name = "eventName" label = "Event Name" required/>
                    </FormControl>

                    <FormControl sx = {{mb : 3}}>
                        <TextField type = "text" name = "description" label = "Description" multiline rows={4} slotProps={{ htmlInput: { maxLength: 255 } }}/>
                    </FormControl>

                    <FormControl sx = {{mb : 3}}>
                        <TextField type = "text" name = "organiser" label = "Organiser" />
                    </FormControl>

                    <FormControl sx = {{mb : 3}}>
                        <TextField type = "text" name = "location" label = "Location" />
                    </FormControl>

                    <FormHelperText>Date and time of event</FormHelperText>
                    <FormControl sx = {{mb : 3}}>
                        <TextField type = "datetime-local" name = "datetime"  />
                    </FormControl>

                    <FormControl sx = {{mb : 3}}>
                        <TextField type = "number" defaultValue={60} name = "duration" slotProps={{ htmlInput: { min: 0, step: 10} }}  />
                        <FormHelperText>Event duration in minutes</FormHelperText>
                    </FormControl>

                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            type = "number"
                            name = "cost"
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">£</InputAdornment>}
                            label="Amount"
                        />
                        </FormControl>

                    <FormControlLabel control={<Switch onChange = { handleRepeatEventChange }/>} label="Repeat Event" sx = {{mb : 3}} />

                    {
                        isRepeatEvent && <RepeatEventSelect /> 
                    }

                    <Slider
                        value={ageRange}
                        onChange={handleAgeRangeChange}
                        valueLabelDisplay="auto"
                        disableSwap
                        min={0}
                        max={25}
                        marks = {marks}
                    />

                    <input type="hidden" name="age" value={ageRange.join(",")} />

                    <FormControl>
                        <Button  variant = "outlined" type = "submit">Add Event</Button>
                    </FormControl>
                </FormGroup>
            </form>
    </Paper>
  )
}

export default NewEventForm