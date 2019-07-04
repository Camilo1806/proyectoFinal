const express = require('express');
const router = express.Router();

const User = require('../model/users')

router.post('/', (req,res,next)=>{
    const data = req.body;
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

module.exports = router