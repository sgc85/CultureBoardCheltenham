import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const formData = await req.formData()

    console.log(formData)

    const eventName = formData.get("eventname");
    const location = formData.get("location");
    const city = formData.get("city");
    const description = formData.get("description");
    const age = formData.get("age[]");
    const cost = formData.get("cost");
    const date = formData.get("eventdate");
    const time = formData.get("eventtime");
    const repeatEvent = formData.get("repeatevent");
    const repeatDays = formData.get("days[1]");

    const data = {
        eventName,
        location,
        city,
        description,
        age,
        cost,
        date,
        time,
        repeatEvent,
        repeatDays
    }

    return NextResponse.json({ status: "success", data: data });
}