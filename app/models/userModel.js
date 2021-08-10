const User = require('../schema/user')

module.exports = class UserModel {

    /**
     * Insert new user
     * @param {*} data 
     * @param {*} callback 
     */
    static createUser = (data, callback) => {
        User.create(data, function(err, result){
            if(err){
                callback({'error': true, data: result})
            } else {
                callback({'error': false, data: result})
            }
            
        })

    }

    /**
     * Vailidate user
     * @param {*} data 
     * @param {*} callback 
     */
     static userLogin = (data, callback) => {
        User.findOne(data, function(err, result){
            if(err){
                callback({'error': true, data: result})
            } else {
                callback({'error': false, data: result})
            }
        })

    }

} // End of class