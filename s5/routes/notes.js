const express = require('express')
const router = express.Router()
const { Note } = require('../sequelize')
const { Op } = require('sequelize')

// const notes = [
//   {
//     id: 1,
//     title: 'Dummy note',
//     content: 'This is a dummy note'
//   }
// ]

router.get('/', async (req, res) => {
  const models = await Note.findAll()
  return res.json(models)
})

// hola mundo desde node = mundo desde -> no
// hola mundo desde node = %mundo desde -> no
// hola mundo desde node = %desde node -> si
// hola mundo desde node = desde node% -> no
// hola mundo desde node = hola mundo% -> si
// hola mundo desde node = %mundo desde% -> si

router.get('/:search', async (req, res) => {
  let { params: { search } } = req
  search = '%' + search + '%'
  console.log(search);
  const models = await Note.findAll({ where: { heading: { [Op.like]: search } } })
  return res.json(models)
})

router.post('/', async (req, res) => {
  const { body } = req
  const model = await Note.create({
    heading: body.heading,
    content: body.content,
  })
  model.save()
  return res.json({message: 'Created succesfully!!', data: model})
})

router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req
  const model = await Note.findByPk(id)
  if(!model){
    return res.status(404).json({ message: 'Not found'});
  }
  const modelUpdated = await model.update({
    heading: body.heading,
    content: body.content,
  })
  return res.json({message: 'Updated succesfully!!', data: modelUpdated})
})

router.delete('/:id', async (req, res) => {
  const { params: { id } } = req
  const model = await Note.findByPk(id)
  if(!model){
    return res.status(404).json({ message: 'Not found'});
  }
  await model.destroy()
  return res.json({message: 'Deleted succesfully!!'})
})

module.exports = router