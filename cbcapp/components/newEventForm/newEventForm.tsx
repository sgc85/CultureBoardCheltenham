'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress, Box, Paper, Typography } from "@mui/material";
import { useAuth } from "@/hooks/useAuth"; 

const NewEventForm = () => {
  //used to determine if the user should be allowed here or not!
  const { user, loading } = useAuth(); 
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  //updated whenever the user, loading 
  useEffect(() => {
    if (!loading && !user) {
      setRedirecting(true);
      router.push("/");
    }
  }, [user, loading, router]);

  // Show a loading indicator if checking auth or redirecting
  if (loading || redirecting) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper>
      <Typography variant="h4">Add New Event</Typography>
      {/* Your form code here */}
    </Paper>
  );
};

export default NewEventForm;
