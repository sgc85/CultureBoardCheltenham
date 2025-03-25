"use client";
import { AppBar, Box, IconButton, Link, Toolbar, Skeleton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { useAuth } from "@/hooks/useAuth";

const TopNavBar = () => {
  const { user, loading, signOutUser } = useAuth();

  return (
    <Box>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" variant="h6" color="#ffffff" underline="none">
            CBC Events
          </Link>

          {loading ? (
            // Skeleton for the icon when loading
            <Skeleton variant = "circular" width={32} height={32} />
          ) : user ? (
            <Box>
              <IconButton href="/addEvent">
                <AddCircleOutlineIcon sx={{ fontSize: "32px", color: "white" }} />
              </IconButton>

              <IconButton onClick={signOutUser}>
                <LogoutIcon sx={{ fontSize: "32px", color: "white" }} />
              </IconButton>
            </Box>
          ) : (
            <IconButton href="/signIn">
              <AccountCircleIcon sx={{ fontSize: "32px", color: "white" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default TopNavBar;
