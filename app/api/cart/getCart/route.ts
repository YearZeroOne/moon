import { POCKET_BASE_URL } from "@/db";
import { NextResponse } from "next/server";
import PocketBase from 'pocketbase';

export async function GET() {
    try {

        const pb = new PocketBase(POCKET_BASE_URL);

        const records = await pb.collection('Products').getFullList({
          sort: '-created',
          cache: 'no-store',
          expand: 'category'
      });
        
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