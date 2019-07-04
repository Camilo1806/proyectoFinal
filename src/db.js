const mongoose = require('mongoose');

const URI= 'mongodb://localhost/mern-tasks';

mongoose.connect(URI, {useNewUrlParser:true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

mongoose.set('useFindAndModify', false) //Deprecation Warning

module.exports= mongoose;