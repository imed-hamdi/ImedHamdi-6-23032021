const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const checkSauceCreate = require('../middleware/checkSauceCreate');
const checkSauceModify = require('../middleware/checkSauceModify');


const sauceCtrl = require('../controllers/sauce');



router.post('/', auth, multer, checkSauceCreate, sauceCtrl.createSauce);
router.put('/:id', auth, multer, checkSauceModify, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauces);
router.post('/:id/like', auth, sauceCtrl.likeDislike);

module.exports = router;