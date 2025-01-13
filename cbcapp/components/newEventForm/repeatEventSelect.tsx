import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React from 'react'

const RepeatEventSelect = () => {
    return (
        <FormControl sx = {{mb : 3}}>
            <InputLabel id="repeatScheduleLabel">How often will the event repeat?</InputLabel>
            <Select
                labelId="repeatScheduleLabel"
                name = "repeatSchedule"
                defaultValue={"weekly"}
                // value={age}
                label="How often will the event repeat?"
                // onChange={handleChange}
            >
                <MenuItem value={"daily"}>Daily</MenuItem>
                <MenuItem value={"weekly"}>Weekly</MenuItem>
                <MenuItem value={"Fortnightly"}>Fortnightly</MenuItem>
                <MenuItem value={"monthly"}>Monthly</MenuItem>
            </Select>
        </FormControl>
      )
}

export default RepeatEventSelect