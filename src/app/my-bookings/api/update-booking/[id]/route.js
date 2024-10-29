import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    const updateDoc = await request.json()
    try {
        const res = await bookingCollection.updateOne(
            { _id: new ObjectId(params.id) },
            { $set: { ...updateDoc } },
            { upsert: true }
        );
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
    }
}