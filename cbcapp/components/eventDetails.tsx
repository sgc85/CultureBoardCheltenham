import React from "react";
import { Paper, Typography, Box, Divider, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { eventType } from "@/types";


interface Props {
  event: eventType;
  setFocus: React.Dispatch<React.SetStateAction<eventType | null>>;
}

const EventDetails = ({ event, setFocus }: Props) => {
  const {
    eventName,
    description,
    datetime,
    duration,
    location,
    organiser,
    cost,
    minAge,
    maxAge,
  } = event;

  return (
    <Box>
      <IconButton onClick={() => setFocus(null)}>
        <ArrowBackIcon />
      </IconButton>
      <Paper sx={{ maxWidth: "50vw", margin: "auto", mt: 4, p: 5 }}>
        <Typography variant="h4">{eventName}</Typography>

        <Typography variant="subtitle1" color="text.secondary">
          Organised by {organiser}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Date doesn't display properly direct from database - needs converting first */}
        <Typography variant="caption">Date & Time:</Typography>
        <Typography variant="body1">
          {new Date(datetime.seconds * 1000).toLocaleString()}
        </Typography>

        <Typography variant="caption">Duration:</Typography>
        <Typography variant="body1">{duration} minutes</Typography>

        <Typography variant="caption">Location:</Typography>
        <Typography variant="body1">{location || "-"}</Typography>

        <Typography variant="caption">Cost:</Typography>
        <Typography variant="body1"> £{cost}</Typography>

        <Typography variant="caption">Age Range:</Typography>
        <Typography variant="body1">
          {minAge} - {maxAge}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box mt={2}>
          <Typography variant="h6">Description</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default EventDetails;
