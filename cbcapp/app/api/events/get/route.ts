import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const eventId = searchParams.get("id");

    if (eventId) {
      // Fetch a single event
      const eventRef = doc(db, "events", eventId);
      const eventSnap = await getDoc(eventRef);

      if (!eventSnap.exists()) {
        return NextResponse.json({ success: false, message: "Event not found" }, { status: 404 });
      }

      return NextResponse.json({ success: true, event: eventSnap.data() }, { status: 200 });
    } else {
      // Fetch all events
      const eventsRef = collection(db, "events");
      const eventsSnap = await getDocs(eventsRef);

      const events = eventsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      return NextResponse.json({ success: true, events }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch events" }, { status: 500 });
  }
};
