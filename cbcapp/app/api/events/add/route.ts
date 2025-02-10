import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const formObject = Object.fromEntries(formData.entries());

    const ageValue = formObject.age;
    let ageArray: number[] = [];
    if (typeof ageValue === "string") {
      ageArray = ageValue.split(",").map(Number);
    } else {
      console.error("Unexpected type for age:", ageValue);
    }

    const dataToSave = { ...formObject, age: ageArray };
    console.log("Received form data:", dataToSave);

    const docRef = await addDoc(collection(db, "events"), dataToSave);

    // Return a JSON response instead of doing a server-side redirect.
    return NextResponse.json({
      success: !!docRef,
      redirectUrl: docRef ? "/dashboard" : "/addEvent",
      message: docRef
        ? "Event created successfully"
        : "Event could not be created",
    });
  } catch (e) {
    console.error("Error adding event:", e);
    return NextResponse.json({
      success: false,
      redirectUrl: "/addEvent",
      message: e instanceof Error ? e.message : "Unknown error occurred",
    });
  }
};
