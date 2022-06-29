import dbConnect from './../../../src/mongoose/connect/Connect';
import AuthTokenSchema from './../../../src/mongoose/models/AuthToken'
import errors from './../../../src/data/error'
import success from './../../../src/data/success'
import AdminsSchema from './../../../src/mongoose/models/AdminAccount';
import { CheckIfLogged } from './../Security/Allowed'

export default async function handler(req, res) {


    let { authToken } = req.cookies
    let checkIfLogged = await CheckIfLogged(authToken)
    if(!checkIfLogged) return res.status(200).json(errors.notAllowed)


    dbConnect()
    // check if Allowed first
    try{
        if(req.method == 'GET') {
            AdminsSchema.find({})
            .then((results) => {
                res.status(200).json(results)
            })
        }


        else if (req.method == 'POST') {
            // Get Data From req
            let adminName = req.body.adminName
            let adminEmail = req.body.adminEmail;
            let adminPassword = req.body.adminPassword;


            try {
                const salt = await bcrypt.genSalt(10)
                const hashedAdminPassword = await bcrypt.hash(adminPassword , salt)

                let adminData = {
                    adminName: adminName,
                    adminEmail: adminEmail,
                    adminPassword: hashedAdminPassword
                }
            
                const admin = new AdminsSchema(adminData);
                admin.save(function (err) {
                    if (err) return res.status(500).json(errors.errorInServer) 
                    res.status(200).json(success.adminCreated) // saved!
                });
            
            }catch(err) {
                res.status(500).json(errors.errorInServer)
            }
        }


        else if(req.method == 'DELETE') {
            const { id } = req.query
            AdminsSchema.findOneAndDelete({_id: id})
            .then(() => {
                res.status(200).json(success.adminDeleted)
            })
        }



    }catch(err) {
        console.log('error in server : ',err)
    }   

}