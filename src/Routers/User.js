const express = require('express');
const router = new express.Router();
const User = require('../models/user')
router.post('/user', async (req, res) => {
    const  user = new User (req.body)
    try {
    const User = await user.save()
    res.status(201).send(User)
    } catch (e) {
    res.status(400).send(e);
    }
});


router.get('/user', async (req, res) => {
  
    try {
        const users = await User.find({})
        res.send(users);
    } catch (e) {
     res.status(500).send(e);
    }
   
});

router.get('/user/:id', async (req, res) => {
    const id =req.params.id
    try {
      const user =  await User.findById(id)
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
});

router.patch('/user/:id', async(req, res) => {
    const update=Object.keys(req.body)
    const allow = ['name','email','password']
    const  isValid = update.every((update)=>{
        return allow.includes(update)
    })
    if (!isValid){
        return res.status(400).send({error:'invalid'});
    }
    const id = req.params.id
    try {
        const user = await User.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})
         res.send(user)
    } catch (err) {
        res.status(404).send(err);
    }
});
router.delete('/user/:id', async (req, res) => {
    const id=req.params.id
    try {
        const user = await User.findByIdAndDelete(id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router