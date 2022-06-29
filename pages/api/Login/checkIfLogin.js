import dbConnect from './../../../src/mongoose/connect/Connect';
import AuthTokenSchema from './../../../src/mongoose/models/AuthToken'
import errors from './../../../src/data/error'
import success from './../../../src/data/success'
import CheckIfNotExpired from './../../../src/utils/CheckIfNotExpired'


export default async function handler(req, res) {
    
    dbConnect()

    if(req.method == "GET") {
        let { authToken } = req.cookies
        AuthTokenSchema.findOne({ authToken : authToken })
        .then((response) => {
            if(!response) return res.status(200).json(false)
            res.json(CheckIfNotExpired(response.createdAt , 25200))
        })
    }
    else if(req.method == "POST") {
        let authToken = req.body.authToken
        
        AuthTokenSchema.findOne({ authToken : authToken })
        .then((response) => {
            if(!response) return res.status(200).json(false)
            res.json(CheckIfNotExpired(response.createdAt , 25200))
        })
    }
}