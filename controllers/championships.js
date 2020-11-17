const championship = require('../models/championship');
const Championship = require('../models/championship');



require('../config/database');





championship.find({}, function(err, championships){
   if(err) {
       console.log(err)
   } else {
       console.log(championships);
   }
})




module.exports = {

}