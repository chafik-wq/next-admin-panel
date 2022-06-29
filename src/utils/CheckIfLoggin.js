import axios from 'axios'

export default function CheckIfLoggin() {
    axios.get(`${process.env.Domain}/api/Login/checkIfLogin`).then((response) => {
        if(!response.data) window.location.href = '/Login'; 
    })
}
