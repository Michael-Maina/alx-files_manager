const express = require('express');
const AppController = require('../controllers/AppController');
const UsersController = require('../controllers/UsersController');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew);
router.post('/connect', AuthController.getConnect);
router.post('/disconnect', AuthController.getDisconnect);
router.post('/users/me', UsersController.getMe);

module.exports = router;
