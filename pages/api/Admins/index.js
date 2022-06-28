import dbConnect from './../../../src/mongoose/connect/Connect';
import AuthTokenSchema from './../../../src/mongoose/models/AuthToken'
import errors from './../../../src/data/error'
import success from './../../../src/data/success'
import AdminsSchema from './../../../src/mongoose/models/AdminAccount';


export default async function handler(req, res) {

    dbConnect()
    // check if Allowed first

    if(req.method == 'GET') {
        AdminsSchema.find({})
        .then((results) => {
            res.status(200).json(results)
        })
    }
}