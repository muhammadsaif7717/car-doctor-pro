import axios from "axios";


export const getBookings = async (email) => {
    try {
        const res = await axios.get(`https://car-doctor-pro-five.vercel.app/my-bookings/api/${email}`);
        return res.data.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}