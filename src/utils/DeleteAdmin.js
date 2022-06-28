import axios from 'axios'

async function DeleteAdmin(_id , callback) {
    const response = await axios.delete(`${process.env.Domain}/api/Admins?id=${_id}`)
    callback((state) => state.filter((item) => item._id !== _id))
}

export default DeleteAdmin