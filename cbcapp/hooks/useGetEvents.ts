import { useState } from "react";

type eventDetails= {
    id: string,
    minAge: number,
    maxAge: number,
    cost: number,
    datetime: string,
    description: string,
    duration: string,
    eventName: string,
    location: string,
    organiser: string
}

export const useGetEvents = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [events, setEvents] = useState<eventDetails[]>();

    const fetchEvents = async (params = {}) => {
        console.log("fetching events...")
        setLoading(true);
        setError("");

        const queryString = new URLSearchParams(params).toString();
        const url = `/api/events/get${queryString ? `?${queryString}` : ""}`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to fetch events");
            }

            setEvents(data.events);
        } catch (error) {
            console.error("Error fetching events:", error);
            setError(error instanceof Error ? error.message : "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, events, fetchEvents };
};
