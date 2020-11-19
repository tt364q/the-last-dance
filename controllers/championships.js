const Championship = require('../models/championship');



require('../config/database');



function create(req, res){
    Championship.create(req.body, function(err, championship){
        res.redirect('/championships')
    });
}

function index(req, res){
    Championship.find({}, function(err, championships){
        res.render('championships/index', { championships })
    });
}
function memories(req, res) {
    res.render('championships/memories');
}



module.exports = {
    index,
    memories,
    create
};