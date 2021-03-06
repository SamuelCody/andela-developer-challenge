import express from 'express';
import userController from '../controllers/User';
import Auth from '../middleware/Auth';

const router = express.Router();

// get all users
router.get('/api/v1/users', Auth.verifyToken, userController.getAllUsers);

//delete a user
router.delete('/api/v1/users/:id', Auth.verifyToken, userController.deleteUser);

// add a user
router.post('/api/v1/auth/signup', Auth.verifyToken, userController.create);

// login a user
router.post('/api/v1/auth/login', userController.login);

module.exports = router;
