import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    try {
        const booking = await request.json();
        console.log(booking)
        const db = await connectDB();
        const bookingsCollection = db.collection('bookings');

        const res = await bookingsCollection.insertOne(booking);
        return NextResponse.json(res);
    } catch (error) {
        console.log(error);
    }
};
