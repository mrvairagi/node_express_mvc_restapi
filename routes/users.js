var express = require('express');
var router = express.Router();
const { body } = require('express-validator');

var UserController = require('../app/controllers/userController')

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

// User Routes
router.post(
	'/userRegistration', 
	body('email').isEmail().normalizeEmail(),
	body('username').notEmpty().trim(),
	body('password').notEmpty().trim(),
	body('full_name').notEmpty().trim(),
	UserController.userRegistration
)

router.post(
	'/userLogin', 
	body('username').notEmpty().trim(),
	body('password').notEmpty().trim(),
	UserController.userLogin
)

module.exports = router;