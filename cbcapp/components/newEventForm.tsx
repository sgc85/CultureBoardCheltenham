"use client";

import React from 'react';
import { 
    Button, 
    FormControl, 
    FormGroup, 
    InputLabel, 
    MenuItem, 
    Select, 
    Slider, 
    TextField, 
    Typography 
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import DateTimePicker from './datetimepicker';

const NewEventForm = () => {
    const locations = ["Cheltenham", "Gloucester", "Stroud", "Cirencester", "Tewkesbury"];
    const marks = [{ value: 0, label: '0' }, { value: 30, label: '30' }];

    return (
        <form method="post" action="/api/events/new">
            <FormGroup>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField type="text" label="Event Name" name="eventname" required />
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField type="text" label="Location" name="location" />
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel id="cityLabelID">City</InputLabel>
                    <Select defaultValue="" name="city" labelId="cityLabelID" label="City">
                        <MenuItem value=""></MenuItem>
                        {locations.map((location, index) => (
                            <MenuItem value={location} key={index}>{location}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                        
                <DateTimePicker />

                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField type="text" multiline rows={4} label="Description" name="description" />
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }}>
                    <Typography variant="caption">Age Range</Typography>
                    <Slider
                        name="age"
                        defaultValue={[10, 13]}
                        valueLabelDisplay="on"
                        marks={marks}
                        min={0}
                        max={30}
                        step={1}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        type="number"
                        label="Cost (£)"
                        name="cost"
                        defaultValue={0.0}
                        inputProps={{ step: 1, min: 0 }}
                        required
                    />
                </FormControl>

                <FormControl>
                    <Button variant="contained" type="submit">Add Event</Button>
                </FormControl>
            </FormGroup>
        </form>
    );
};

export default NewEventForm;
