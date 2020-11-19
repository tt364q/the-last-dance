const Memory = require ('../models/memories');


function create(req, res){
    Memory.create(req.body, function(err, memory){
        res.redirect('/memories')
    });
}

function memories(req, res) {
    res.render('/championships/memories');
}

function index(req, res){
    Memory.find({}, function(err, memories){
        res.render('memories/index', { memories })
    });
}
module.exports = {
    create,
    memories,
    index
};