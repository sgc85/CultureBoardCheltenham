import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebase";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

export const GET = async (req: NextRequest) => {

  console.log("fetching events using API...")
  try {
    const { searchParams } = new URL(req.url);
    console.log(searchParams)
    const eventId = searchParams.get("id");
    //to be used later when getting specific details for an event
    if (eventId) {
      // Fetch a single event
      const eventRef = doc(db, "events", eventId);
      const eventSnap = await getDoc(eventRef);

      if (!eventSnap.exists()) {
        return NextResponse.json({ success: false, message: "Event not found" }, { status: 404 });
      }

      return NextResponse.json({ success: true, event: eventSnap.data() }, { status: 200 });
    } else {
      // Fetch filtered events
      const eventsRef = collection(db, "events");
      let constraints = [];

      if (searchParams.get("eventName")) {
        constraints.push(where("eventName", "==", searchParams.get("eventName")));

      }


      const age = parseInt(searchParams.get("age") as string, 10);
      if (age) {
        //databases needed indexing on min age at this point - follow link in error and accept defaults for this when it happens. - if it happens.
        constraints.push(where("maxAge", ">=", age))
        constraints.push(where("minAge", "<=", age))
      }

      //would be good if this did "like" - needs to be filtered at a later date for this.
      const organiser = searchParams.get("organiser")
      if (organiser !== '') {
        constraints.push(where("organiser", "==", organiser));
      }

      constraints.push(where("datetime",">=", new Date()))

      console.log(constraints)
      const q = query(eventsRef, ...constraints);
      const eventsSnap = await getDocs(q);
      const events = eventsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      return NextResponse.json({ success: true, events }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch events" }, { status: 500 });
  }
};
