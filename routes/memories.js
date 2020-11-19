const express = require('express');

const router = express.Router();


const memoriesCtrl = require('../controllers/memories');

//define our routes
// get championships index view -> show me all championships
router.get('/', memoriesCtrl.index);

router.get('/memories', memoriesCtrl.memories);

router.post('/', memoriesCtrl.create);


//exprot the router object)
module.exports = router;