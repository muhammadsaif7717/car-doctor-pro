import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";


export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings');
    try {
        const res = await bookingsCollection.findOne({ _id: new ObjectId(params.id) });
        return Response.json({ data: res });
    } catch (error) {
        console.log(error);
    }
};
