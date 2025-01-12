"use client";

import React from 'react';
import { 
    Button, 
    FormControl, 
    FormControlLabel, 
    FormGroup, 
    InputLabel, 
    MenuItem, 
    Select, 
    Slider, 
    Switch, 
    TextField, 
    Typography 
} from '@mui/material';
import DateTimePicker from './datetimepicker';
import DayPicker from './dayPicker';
import { useSelectedDays } from '@/hooks/useSelectedDays';

const NewEventForm = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault()
        const formData = new FormData(event.currentTarget);

        selectedDays.forEach((day) => {
            formData.append("days[]", day);
        })
        

    }

    const locations = ["Cheltenham", "Gloucester", "Stroud", "Cirencester", "Tewkesbury"];
    const marks = [{ value: 0, label: '0' }, { value: 30, label: '30' }];

    const [repeatEvent, setRepeatEvent] = React.useState<boolean>(true);
    const {selectedDays} = useSelectedDays();

    return (
        <form method="post" action = "/api/events/new" onSubmit={handleSubmit}>
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
                        <MenuItem value="" />
                        {locations.map((location, index) => (
                            <MenuItem value={location} key={index}>{location}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                        
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <FormControlLabel control = {<Switch name = "repeatevent" checked={repeatEvent} onChange={(e) => setRepeatEvent(e.target.checked)} />} label="Repeat Event" />
                </FormControl>
                {
                    repeatEvent ? 
                    <DayPicker />
                    : <DateTimePicker />
                }

                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField type="text" multiline rows={4} label="Description" name="description" />
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }}>
                    <Typography variant="caption">Age Range</Typography>
                    <Slider
                        defaultValue={ageRange}
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
