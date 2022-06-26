import dbConnect from './../../../src/mongoose/connect/Connect';
import AuthTokenSchema from './../../../src/mongoose/models/AuthToken'

export default async function handler(req, res) {
    let { authToken } = req.cookies
    if(authToken) res.json( authToken )
    else res.json('not allowed')
}