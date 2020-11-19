const express = require('express');

const router = express.Router();


const championshipsCtrl = require('../controllers/championships');

//define our routes
// get championships index view -> show me all championships
router.get('/', championshipsCtrl.index);

router.get('/memories', championshipsCtrl.memories);

router.post('/', championshipsCtrl.create);


//exprot the router object)
module.exports = router;