const express = require('express');
const router = express.Router();
const memoriesCtrl = require('../controllers/memories');

//define our routes

router.get('/', memoriesCtrl.index);
// router.get('/memories', memoriesCtrl.memories);
router.post('/create', memoriesCtrl.create);
router.post('/:id/update', memoriesCtrl.update);


//exprot the router object)
module.exports = router;