"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const { signIn, loading, error, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const router = useRouter();

  // Redirect user to home page if already signed in
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  // Show snackbar when error occurs
  useEffect(() => {
    if (error) {
      setSnackBarOpen(true);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Paper sx={{ p: 4, width: 300 }}>
        <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </Paper>

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackBarOpen(false)}
        message={error}
      />
    </Box>
  );
};

export default SignInForm;
