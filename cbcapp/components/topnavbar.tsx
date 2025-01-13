import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'

const TopNarBar = () => {
  return (
    <Box>
        <AppBar>
            <Toolbar sx = {
              {
                display: 'flex',
                justifyContent: 'space-between'
              }
            }>
                <Typography>CBC Events</Typography>

                <IconButton href = "/addEvent">
                  <AddCircleOutlineIcon sx = {
                    {
                      fontSize: "32px",
                      color: "white",
                    }
                  }/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Toolbar />
    </Box>
  )
}

export default TopNarBar