// Remove this in production

export default async function handler(req, res) {

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
        console.log(err)
        res.status(500).json(errors.errorInServer)
    }
    
}