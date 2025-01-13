import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const formData = await req.formData()

    console.log(formData)

    const eventName = formData.get("eventName")

    return NextResponse.json(
        {
            success: true, 
            data: {eventName: eventName}
        })

}