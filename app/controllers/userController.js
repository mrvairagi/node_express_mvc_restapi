const { validationResult } = require('express-validator');
const UserModel = require('../models/userModel')

module.exports = class UserController {

    /**
     * Register a new user
     * @param {*} req 
     * @param {*} res 
     */
    static userRegistration = (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            let userData = req.body
            UserModel.createUser(userData, function(result, err){
                if(err) {return err}
                else{
                    return res.json({data: result, 'message': 'User registration is successfull'})
                }
            })
        }
    }

    /**
     * Validate a user
     * @param {*} req 
     * @param {*} res 
     */
     static userLogin = (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            let userData = req.body
            UserModel.userLogin(userData, function(result, err){
                if(err) {return err}
                else{
                    if(result.error == true){
                        return res.json({data: result, 'message': 'Something went wrong'})
                    } else {
                        if(result.data == null){
                            return res.json({data: result, 'message': 'Invailid login credentials'})
                        } else {
                            return res.json({data: result, 'message': 'User login is successful'})
                        }
                    }
                    
                }
            })
        } // End of outer else
    }

} // End of class