const mongoose = require('mongoose');


const db = mongoose.connection;

const connectionURI ='mongodb+srv://admin:Tejano05@cluster0.d7hcz.mongodb.net/the-last-dance?retryWrites=true&w=majority';

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

db.on('connected', function(){
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

db.on('error', function(error){
    console.log(`Encountered the following error: ${error.message}`);
});