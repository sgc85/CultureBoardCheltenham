import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { useSelectedDays } from '@/hooks/useSelectedDays';

const DayPicker = () => {

  const { selectedDays, handleChange } = useSelectedDays();

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <FormHelperText>Select the days this event runs.</FormHelperText>
      {days.map((day, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              value={day} // Pass the value to the Checkbox itself
              checked={selectedDays.includes(day)} // Controlled state
              onChange={handleChange}
            />
          }
          label={day}
        />
      ))}
    </FormControl>
  );
};

export default DayPicker;
