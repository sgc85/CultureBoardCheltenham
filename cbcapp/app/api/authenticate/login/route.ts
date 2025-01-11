import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
    const formData = await req.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    
    
    return NextResponse.json(
        {
            success: true, 
            data: {
                email: email,
                password: password
            }}
        )
    }
    catch (error) {
        return NextResponse.json(
            {
            success: false,
            error: error instanceof Error ? error.message : "unknown error"
            }
        )
    }

}