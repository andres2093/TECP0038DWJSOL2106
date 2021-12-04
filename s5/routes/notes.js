const express = require('express')
const router = express.Router()

const notes = [
  {
    id: 1,
    title: 'Dummy note',
    content: 'This is a dummy note'
  }
]

router.get('/', (req, res) => {
  return res.json(notes)
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