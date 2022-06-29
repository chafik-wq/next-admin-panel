import axios from 'axios'

export async function CheckIfLogged(authToken) {
    let response = await axios.post(`${process.env.Domain}/api/Login/checkIfLogin` , {
        authToken: authToken
    })
    return response.data
}