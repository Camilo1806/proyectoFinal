const express = require('express');
const router = express.Router();

const Task = require('../model/tasks')

// //CRUD

// //Create
// router.post('/', async (req,res,next)=>{
//     const {title, description} = req.body
//     const task = new Task({title, description})
//     await task.save()
//     res.json({status:"Task saved"})
// }); 

// //Read
// router.get('/', async (req,res,next)=>{
//     const tasks = await Task.find();
//     res.json(tasks)
// });

// router.get('/:id', async (req,res,next)=>{
//     const task = await Task.findById(req.params.id);
//     res.json(task)
// });


// //Update
// router.put('/:id', async (req,res,next)=>{
//     const {title, description} = req.body;
//     const newTask = {title, description};
//     await Task.findByIdAndUpdate(req.params.id, newTask);
//     res.json({status: "Task update"})
// });

// //Delete
// router.delete('/:id', async (req,res,next)=>{
//     await Task.findByIdAndRemove(req.params.id);
//     res.json({status:"Task deleted"})
// });



//CRUD --> Create - Read - Update - Delete

// Handling errors

//Create
router.post('/', (req,res,next)=>{
    const {title, description} = req.body
    const task = new Task({title, description})
    task.save()
    .then(d=>res.json({status:"Task saved"}))
    .catch(next)
}); 

//Read
router.get('/', (req,res,next)=>{
    Task.find().then(tasks=>res.json(tasks))
    .catch(next);
});

router.get('/:id',(req,res,next)=>{
    Task.findById(req.params.id)
    .then(task=>res.json(task))
    .catch(next);
});


//Update
router.put('/:id',(req,res,next)=>{
    const {title, description} = req.body;
    const newTask = {title, description};
    Task.findByIdAndUpdate(req.params.id, newTask)
    .then(d=>res.json({status: "Task update"}))
    .catch(next)
});

//Delete
router.delete('/:id',(req,res,next)=>{
    Task.findByIdAndRemove(req.params.id)
    .then(d=>res.json({status:"Task deleted"}))
    .catch(next);
});


module.exports = router;