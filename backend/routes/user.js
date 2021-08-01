const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const ValidityUSer = require('../middleware/ValidityUSer');
router.post('/signup', ValidityUSer, userCtrl.signup);
router.post('/login', ValidityUSer, userCtrl.login);
module.exports = router;