import axios from "axios";
import { GOOGLE_API } from "../../config/Constants";


const RevGeolocation = async (lat, lng) => {
    try {
        const res = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API}`
        )
        return res.data;
    } catch (error) {
        console.log("google distance gen api error", error);
        throw {message:"google distance gen api error"};         
    }
}
  
export default RevGeolocation