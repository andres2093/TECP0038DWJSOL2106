const express = require('express')
const router = express.Router()
const { Comment } = require('../sequelize')

const comments = [
  {
    id: 1,
    title: 'Dummy note',
    content: 'This is a dummy note',
    userId: 1
  }
]

router.get('/', (req, res) => {
  return res.json(comments)
})

router.post('/', (req, res) => {
  return res.json({message: 'Created succesfully!!'})
})

router.put('/', (req, res) => {
  return res.json({message: 'Updated succesfully!!'})
})

router.delete('/', (req, res) => {
  return res.json({message: 'Deleted succesfully!!'})
})

module.exports = router