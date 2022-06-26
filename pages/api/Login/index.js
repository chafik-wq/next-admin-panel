import bcrypt from 'bcrypt'
import dbConnect from './../../../src/mongoose/connect/Connect';
import AdminsSchema from './../../../src/mongoose/models/AdminAccount';
import AuthTokenSchema from './../../../src/mongoose/models/AuthToken'
import errors from './../../../src/data/error'
import success from './../../../src/data/success'
import cryptoRandomString from 'crypto-random-string';

export default async function handler(req, res) {

    dbConnect();
    // Get Data From req
    let adminEmail = req.body.adminEmail;
    let adminPassword = req.body.adminPassword;
    try{
        
        AdminsSchema.findOne({adminEmail: adminEmail} ,async (err , user) => {
            if(!user) {
                res.status(200).json(errors.undefinedAdmin)
            }
            if(user) {
                if( await bcrypt.compare(adminPassword , user.adminPassword) ) {
                    const Token = cryptoRandomString({length: 300, type: 'url-safe'});
                    const authToken = new AuthTokenSchema({adminEmail : adminEmail,authToken : Token});
                    authToken.save(function (err) {
                        if (err) return console.log(err)
                        res.setHeader("set-cookie", `authToken=${Token}; path=/; samesite=lax; httponly;`)
                        res.status(200).json(success.adminLogged)
                    }); 
                }else {
                    res.status(200).json(errors.wrongPassword)
                }
            }
        })
    }catch(err) {
        console.log(err)
        res.status(500).json(errors.errorInServer)
    }

}
