import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Typography variant="h3" textAlign='center'>
        Welcome to the CBC Event Hub
      </Typography>


      <Button href = "/dashboard" variant="outlined" sx = {{mx: 'auto'}} >Show Events</Button>
    </Box>
  );
}
