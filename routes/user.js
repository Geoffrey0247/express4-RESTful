const express=require('express');
var userController = require('../controllers/user');
var authController = require('../controllers/auth');

//configure routes

const router=express.Router();

router.route('/user')
    .get(authController.isAuthenticated, userController.getAllUsers)
    .post(userController.postUsers);

router.route('/user/:id')
    .put(authController.isAuthenticated, userController.putUserById)
    .get(authController.isAuthenticated, userController.getUserById)
    .delete(authController.isAuthenticated, userController.deleteUserById);

module.exports=router;
