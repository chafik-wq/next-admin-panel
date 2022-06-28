import axios from 'axios'

export default async function GetAdminsData() {
    let response = await axios.get(`${process.env.Domain}/api/Admins`)
    return response.data
}