import dbConnect from './../../../src/mongoose/connect/Connect';
//import AuthTokenSchema from './../../../src/mongoose/models/AuthToken'
import errors from './../../../src/data/error'
import success from './../../../src/data/success'
import AuthTokenSchema from './../../../src/mongoose/models/AuthToken'
import { CheckIfLogged } from './../Security/Allowed'


export default async function handler(req, res) {

    let { authToken } = req.cookies
    let checkIfLogged = await CheckIfLogged(authToken)
    if(!checkIfLogged) return res.status(200).json(errors.notAllowed)
    
    dbConnect()
    AuthTokenSchema.findOneAndDelete({authToken : authToken})
    .then((result) => {
        res.status(200).json(success.adminLoggedOut)
    })
}