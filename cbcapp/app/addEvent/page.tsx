"use client";
import NewEventForm from "@/components/newEventForm/newEventForm";
import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth"; // Import auth hook
import { useRouter } from "next/navigation"; // Import router for navigation
import { CircularProgress } from "@mui/material";

const AddEventPage = () => {
  const { user, loading } = useAuth(); // Get user state
  const router = useRouter();
  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      return router.push("/");
    }
  }, [user, loading, router]);

  if (loading) return <CircularProgress sx={{ margin: "auto" }} />;

  return <NewEventForm />;
};

export default AddEventPage;
