import { connectDB } from "@/lib/connectDB";


export const GET = async ({ params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings');
    try {
        const res = await bookingsCollection.find({ email: params.email }).toArray();
        return Response.json({ data: res });
    } catch (error) {
        console.log(error);
    }
};
