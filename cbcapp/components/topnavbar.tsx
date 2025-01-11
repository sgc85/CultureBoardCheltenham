import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';

import React from 'react'
import NewEventButton from './newEventButton';

const TopNarBar = () => {

  const user = true

  return (
    <Box>
        <AppBar>
            <Toolbar sx = {{display: 'flex', justifyContent: 'space-between'}}>
                <Typography>CBC Events</Typography>

                  { user ? <NewEventButton />

                  : 
                    <LoginIcon href = "/login" sx = {{ color :'white', fontSize: '32px'}} /> 
                  }

            </Toolbar>
        </AppBar>
        <Toolbar />
    </Box>
  )
}

export default TopNarBar