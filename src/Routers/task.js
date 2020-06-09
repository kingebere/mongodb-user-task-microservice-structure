const express = require('express');
const router =  new express.Router();
const Task = require('../models/task');
router.post('/task', async (req, res) => {
    const task = new Task(req.body)
    try {
        const Task =  await task.save()
        res.status(201).send(Task)
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/task', async (req, res) => {
    
    try {
        const task =await Task.find({})
        res.send(task);
    } catch (err) {
        res.status(500).send(err)
    }
});

router.get('/task/:id', async (req, res) => {
    const id= req.params.id
    try {
        const task =await Task.findById(id)
        res.send(task)
    } catch (err) {
        res.status(500).send(err);
    }
});

router.patch('/task/:id', async (req, res) => {
    const id =req.params.id
    try {
        const user = await Task.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})
    if(!user){
      return  res.status(404).send()
    }
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
});

router.delete('/task/:id', async (req, res) => {
    const id =req.params.id
    try {
        const task = await Task.findByIdAndDelete(id)
    if (!task){
      return  res.status(404).send();
    }
    res.send(task)
    } catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router