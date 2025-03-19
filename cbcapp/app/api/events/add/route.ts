import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const formObject = Object.fromEntries(formData.entries());

    const minAge = parseInt(formObject.minAge as string, 10);
    const maxAge = parseInt(formObject.maxAge as string, 10);
    const cost = parseInt(formObject.cost as string, 10);


    // const ageValue = formObject.age;
    // let ageArray: number[] = [];
    // if (typeof ageValue === "string") {
    //   ageArray = ageValue.split(",").map(Number);
    // } else {
    //   console.error("Unexpected type for age:", ageValue);
    // }

    const dataToSave = { ...formObject, minAge, maxAge, cost };
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
