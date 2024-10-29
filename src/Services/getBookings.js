import axios from "axios";


export const getBookings = async (email) => {
    const res = await axios.get(`http://localhost:3000/my-bookings/api/${email}`);
    return res.data.data;
}