const express = require('express')
const router = express.Router()
const { User } = require('../sequelize')

// const usuarios = [
//   {
//     id: 1,
//     name: 'Andres',
//     lastname: 'Ramírez',
//     imageProfile: 'profile.png',
//     bio: 'Bedu expert'
//   }
// ]

router.get('/', async (req, res) => {
  const models = await User.findAll(); // Getting all registers in table
  return res.json(models);
});

router.post('/',  async (req, res) => {
  const { body } = req; // Getting data from request 
  const model = await User.create({
    name: body.name,
    lastname: body.lastname,
    imageProfile: body.imageProfile,
    bio: body.bio,
    type: body.type
  }); // Creating an instance
  model.save(); // Saving model in database
  return res.json({ message: 'Created successfully', data: model });
});

// Handler for update a specific register
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req; // Getting id from parameters
  const model = await User.findByPk(id) // Finding specific register based on id
  if (!model) {
    return res.status(404).json({ message: 'Not found'});
  }
  // The new model with request changes
  const updatedModel = await model.update({
    name: body.name,
    lastname: body.lastname,
    imageProfile: body.imageProfile,
    bio: body.bio,
    type: body.type
  });
  return res.json({ message: 'Updated successfully', data: updatedModel });
});

// Handler for delete a specific register
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req; // Getting id from parameters
  const model = await User.findByPk(id) // Finding specific register based on id
  if (!model) {
    return res.status(404).json({ message: 'Not found'});
  }
  await model.destroy(); // Destroying resource
  return res.json({ message: 'Deleted successfully' });
});

module.exports = router