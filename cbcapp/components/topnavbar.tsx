'use client'
import { AppBar, Box, IconButton, Link, Toolbar } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import { auth } from '@/firebase';
import { useAuthState } from "react-firebase-hooks/auth"

const TopNarBar = () => {

  const [user, loading] = useAuthState(auth)

  return (
    <Box>
        <AppBar>
            <Toolbar sx = {
              {
                display: 'flex',
                justifyContent: 'space-between'
              }
            }>
              <Link href = "/" variant = "h6" color = "#ffffff" underline = "none">
              CBC Events
              </Link>


              { user ? (
                <IconButton href = "/addEvent">
                  <AddCircleOutlineIcon sx = {
                    {
                      fontSize: "32px",
                      color: "white",
                    }
                  }/>
                </IconButton>
              ) : (
                <IconButton href = "/signIn">
                <AccountCircleIcon sx = {
                  {
                    fontSize: "32px",
                    color: "white",
                  }
                }/>
              </IconButton>
              )}
            </Toolbar>
        </AppBar>
        <Toolbar />
    </Box>
  )
}

export default TopNarBar