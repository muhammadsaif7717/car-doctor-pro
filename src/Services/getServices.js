import axios from "axios";

export const getServices = async () => {
    try {
        const res = await axios.get('https://car-doctor-pro-five.vercel.app/services/api/get-all')
        return res.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}
export const getServiceDetails = async (id) => {
    try {
        const res = await axios.get(`https://car-doctor-pro-five.vercel.app/services/api/${id}`)
        return res.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}