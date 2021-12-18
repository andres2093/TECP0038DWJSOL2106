const express = require('express');
const sequelize = require('../db');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.post('/login', async (req, res) => {
  const { body } = req
  const user = await sequelize.models.users.findOne({ where: {
    email: body.email
  }})

  if(!user){
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if(!user.validPassword(body.password)){
    return res.status(401).json({ message: 'Invalid credentials!' })
  }

  const token = jwt.sign({ userId: user.id }, 'secretkey', {
    expiresIn: 36000
  })

  return res.json({
    message: 'Authenticated sucessfully',
    token
  })
})

router.post('/signup', async (req, res) => {
  const { body } = req
  const user = await sequelize.models.users.findOne({ where: {
    email: body.email
  }})

  if(user){
    return res.status(401).json({ message: 'this email is already registered!' })
  }

  const users = await sequelize.models.users.create({
    name: body.name,
    lastname: body.lastname,
    email: body.email,
    password: body.password,
    type: 'client'
  });
  await users.save();
  return res.status(201).json({ 
    data: users, 
    message: 'Created!'
  })
})

module.exports = router