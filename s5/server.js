const express = require('express')
const app = express()

const APP_PORT = 3001

const notes = [
  {
    id: 1,
    title: 'Dummy note',
    content: 'This is a dummy note'
  }
]

app.get('/', (req, res) => {
  return res.send('<h1>Welcome to express!</h1>')
})

app.get('/api/notes', (req, res) => {
  return res.json(notes)
})

app.listen(APP_PORT, () => {
  console.log('Server on port: ', APP_PORT);
})