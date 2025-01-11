import FormControl from '@mui/material/FormControl'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import React from 'react'

const DateTimePicker = () => {
  return (
    <FormControl fullWidth sx={{ mb: 3, display: 'flex', flexDirection: 'row' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Event Date"
                name = "eventDate" 
                sx = {{flex: 1}}/>

            <TimePicker 
                label="Event Time" 
                name = "eventTime"
                sx = {{ flex : 1}}
                />
        </LocalizationProvider>
    </FormControl>
  )
}

export default DateTimePicker