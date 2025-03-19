"use client";
import {
  Button,
  Snackbar,
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Slider,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import { FormHelperText } from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import RepeatEventSelect from "./repeatEventSelect";

const NewEventForm = () => {

  const [isRepeatEvent, setIsRepeatEvent] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [ageRange, setAgeRange] = useState<number[]>([0, 25]);
  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);

  const handleRepeatEventChange = () => {
    setIsRepeatEvent(!isRepeatEvent);
  };

  const handleAgeRangeChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setAgeRange([...newValue]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/events/add", { method: "POST", body: formData });
    const result = await res.json();

    if (result.success) {
        setMessage("Event Created Successfully");
        setSnackBarOpen(true);
        form.reset(); // Reset the form
    } else {
        setMessage("Error Creating Event");
        setSnackBarOpen(true);
    }
};

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 25,
      label: "25",
    },
  ];

  return (
    <Box>
      <Paper
        elevation={5}
        sx={{
          width: "50%",
          mx: "auto",
          p: 5,
        }}
      >
        <Typography variant="h4" textAlign={"center"} sx={{ mb: 3 }}>
          Add New Event
        </Typography>

        <form id="event-form" onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl sx={{ mb: 3 }}>
              <TextField
                type="text"
                name="eventName"
                label="Event Name"
                required
              />
            </FormControl>

            <FormControl sx={{ mb: 3 }}>
              <TextField
                type="text"
                name="description"
                label="Description"
                multiline
                rows={4}
                slotProps={{ htmlInput: { maxLength: 255 } }}
              />
            </FormControl>

            <FormControl sx={{ mb: 3 }}>
              <TextField type="text" name="organiser" label="Organiser" />
            </FormControl>

            <FormControl sx={{ mb: 3 }}>
              <TextField type="text" name="location" label="Location" />
            </FormControl>

            <FormHelperText>Date and time of event</FormHelperText>
            <FormControl sx={{ mb: 3 }}>
              <TextField type="datetime-local" name="datetime" />
            </FormControl>

            <FormControl sx={{ mb: 3 }}>
              <TextField
                type="number"
                defaultValue={60}
                name="duration"
                slotProps={{ htmlInput: { min: 0, step: 10 } }}
              />
              <FormHelperText>Event duration in minutes</FormHelperText>
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                type="number"
                name="cost"
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">£</InputAdornment>
                }
                label="Amount"
              />
            </FormControl>

            <FormControlLabel
              control={<Switch onChange={handleRepeatEventChange} />}
              label="Repeat Event"
              sx={{ mb: 3 }}
            />

            {isRepeatEvent && <RepeatEventSelect />}

            <Slider
              value={ageRange}
              onChange={handleAgeRangeChange}
              valueLabelDisplay="auto"
              disableSwap
              min={0}
              max={25}
              marks={marks}
            />

            <input type="hidden" name="minAge" value={ageRange[0]} />
            <input type="hidden" name="maxAge" value={ageRange[1]} />

            <FormControl>
              <Button variant="outlined" type="submit">
                Add Event
              </Button>
            </FormControl>
          </FormGroup>
        </form>
      </Paper>

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackBarOpen(false)}
        message={message}
      />
    </Box>
  );
};

export default NewEventForm;
