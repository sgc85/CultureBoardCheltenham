import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const TopNarBar = () => {
  return (
    <Box>
        <AppBar>
            <Toolbar>
                <Typography>CBC Events</Typography>
            </Toolbar>
        </AppBar>
        <Toolbar />
    </Box>
  )
}

export default TopNarBar