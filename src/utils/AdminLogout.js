import axios from 'axios'

export default async function AdminLogout() {
    let response = await axios.post(`${process.env.Domain}/api/Admins/Logout`)
    return window.location.href = '/Login'
}