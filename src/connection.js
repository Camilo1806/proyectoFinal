const express = require('express');
const morgan = require('morgan'); //Muestra peticiones HOST 
const routes = require('./routes/eps.routes');
const routes2 = require('./routes/users.routes')
const path = require('path'); //Module Node 
const { mongoose } = require('./db'); 

const app = express();

const PORT = 3000;

//Setttings
app.set('port', process.env.PORT || PORT);

//Middlewares
app.use(morgan('dev')) //Peticiones en consola

app.use(express.json())

// Routes
app.use('/api/tasks',routes)
app.use('/api/users', routes2)

app.use((err,req,res,next)=>{
    res.status(422).send({Error: err.message})
})

// Static Files
app.use(express.static(path.join(__dirname,'public')))

// Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port: ${PORT}`)
});