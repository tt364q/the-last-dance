const Memory = require ('../models/memory');



function memories(req, res) {
    console.log("hello memories")
    res.render('/memories');
}

function index(req, res){
    console.log("hello Index")
    Memory.find({}, function(err, memories){
        res.render('memories/index', { memories })
    });
}

function create(req, res){
    Memory.create(req.body, function(err, memory){
        res.redirect('/memories')
    });
}
function update(req, res){
    // console.log("***D*D****", req)
    Memory.findOneAndUpdate(req.params, req.body, function(err, memory){
        console.log("*******", err)
        res.redirect('/memories')
    });
}

module.exports = {
    create,
    memories,
    index,
    update
};