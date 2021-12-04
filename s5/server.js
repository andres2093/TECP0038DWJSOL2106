const express = require('express')
const app = express()

const APP_PORT = 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  return res.send('<h1>Welcome to express!</h1>')
})

app.use('/api', require('./routes'))

app.listen(APP_PORT, () => {
  console.log('Server on port: ', APP_PORT);
})

// Page -> https://www.cloudclusters.io
// Name -> yadim76936
// Lastname -> suggerinc
// Email -> yadim76936@suggerin.com
// Pass -> vektof-xodbe1-Jajdyc

// DB
// host -> mysql-60632-0.cloudclusters.net
// port -> 11198
// user -> admin
// pass -> gYGRQ0Kr