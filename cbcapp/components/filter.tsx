'use client'
import { Button, FormControl, TextField, Box, Stack } from '@mui/material';
import React from 'react';

interface Props {
    fetchEvents: (params : object) => void
}

const Filter = ({ fetchEvents }: Props) => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        fetchEvents(formData)
    }


    return (
        <Box display="flex" justifyContent="center" mt={5}>
            <form onSubmit={handleSubmit}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <FormControl>
                        <TextField type="text" name="eventName" label="Event Name" />
                    </FormControl>
                    <FormControl>
                        <TextField type="number" name="age" label="Age" />
                    </FormControl>
                    <FormControl>
                        <TextField type="text" name="organiser" label="Organiser" />
                    </FormControl>
                    <Button type="submit" variant="contained">Show Events</Button>
                </Stack>
            </form>
        </Box>
    );
};

export default Filter;
