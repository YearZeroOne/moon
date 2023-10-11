import db from "@/db";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
export async function GET() {
    try {
        const cookieStore = cookies();
        const records : any = await db.getUser(cookieStore);

        return NextResponse.json(records);
    
    } catch (err: any) {
        JSON.stringify({ error: err.message || err.toString() }),
        {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    }      
  }