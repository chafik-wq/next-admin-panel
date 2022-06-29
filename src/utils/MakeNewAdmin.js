import axios from 'axios'

export default async function AddNewAdmin(adminName , adminEmail , adminPassword) {
    let response = await axios.post(`${process.env.Domain}/api/Admins` , {
        adminName: adminName,
        adminEmail: adminEmail,
        adminPassword: adminPassword,
    })
    return response.data
}