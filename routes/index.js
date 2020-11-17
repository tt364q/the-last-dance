//require express module
const express = require('express');

const router = express.Router();
//setup router object 


//TODO require controller module (index controller
const indexCtrl = require('../controllers/index');

//define our routes
router.get('/', indexCtrl.index);

//exprot the router object)
module.exports = router;