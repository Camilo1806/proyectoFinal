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

router.post('/login', (req,res,next)=>{
    const { correo, contraseña } = req.body
    User.find({correo:correo})
    .then(data=>{
        if (data[0].nombres){
            (data[0].contraseña==contraseña)?res.json({user:true,perm:true}):res.json({user:true,perm:false})
        } else{
            res.json({user:false})
        }
    })
    .catch(err=>res.json({user:false}))
});

router.get('/', (req,res,next)=>{
    User.find()
    .then( users => res.json(users) )
    .catch(next)
})

router.get('/correo/:correo', (req,res,next)=>{
    User.find({correo:req.params.correo})
    .then(d=>{
        if (d[0].correo){
            res.json({exists:true})
        }else{
            res.json({exists:false})
        }
    })
    .catch(err=>res.json({exists:false}))
});

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