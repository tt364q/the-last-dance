const Memory = require ('../models/memory');


function index(req, res){
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
    Memory.findByIdAndUpdate(req.params.id, req.body, function(err, memory){
        if (err) {
         console.log(err);
        } else {
          res.redirect('/memories');
        }
     })
}

function remove(req, res){
    Memory.findByIdAndRemove(req.params.id, function(err, memory){
        if (err) {
         console.log(err);
        } else {
          res.redirect('/memories');
        }
     })
}
module.exports = {
    create,
    index,
    update,
    remove
}