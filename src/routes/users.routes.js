const express = require('express');
const router = express.Router();

const User = require('../model/users')

router.post('/', (req,res,next)=>{
    const data = req.body;
    console.log(data)
    const user = new User(data);
    user.save()
    .then(d=>res.json({status:"User saved"}))
    .catch(next)
});

router.get('/', (req,res,next)=>{
    User.find()
    .then( users => res.json(users) )
    .catch(next)
})

router.get('/terms', (req,res,next)=>{
    res.download('./src/terms/terms.pdf', 'Terminos y condiciones.pdf', (err)=>{
        if (err){
            res.end(`Error: ${err}`)
        } else{
            console.log('File downloaded')
        }
    })
})

module.exports = router