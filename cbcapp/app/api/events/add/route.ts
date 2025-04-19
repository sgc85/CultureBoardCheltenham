import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const formObject = Object.fromEntries(formData.entries());

    const minAge = parseInt(formObject.minAge as string, 10);
    const maxAge = parseInt(formObject.maxAge as string, 10);
    // --> Updated this to parse floats
    const cost = parseFloat(formObject.cost as string)
    const datetime = new Date(formObject.datetime as string)

 
    const dataToSave = { ...formObject, minAge, maxAge, cost, datetime };
    // // console.log("Received form data:", dataToSave);

    //CHANGED
    await addDoc(collection(db, "events"), dataToSave);

    //CHANGED
    return NextResponse.json({
      success: true,
    });
  } catch (e) {
    console.error("Error adding event:", e);
    return NextResponse.json({
      success: false,
    });
  }
};
