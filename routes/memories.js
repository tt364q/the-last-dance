const express = require('express');
const router = express.Router();
const memoriesCtrl = require('../controllers/memories');

//define our routes

router.get('/', memoriesCtrl.index);
router.post('/create', memoriesCtrl.create);
router.post('/:id/update', memoriesCtrl.update);
router.post('/:id/delete', memoriesCtrl.remove);


//exprot the router object)
module.exports = router;