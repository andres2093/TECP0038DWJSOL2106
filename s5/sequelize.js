const Sequelize = require('sequelize')
const NoteModel = require('./models/notes')

const sequelize = new Sequelize(
  'andres', // DB Name
  'admin', // DB User
  'gYGRQ0Kr', // DB Pass
  {
    host: 'mysql-60632-0.cloudclusters.net',
    port: 11198,
    dialect: 'mysql'
  }
)

const Note = NoteModel(sequelize, Sequelize)

sequelize.sync({ force: false })
  .then(() => console.log("Tablas creadas!!!"))

module.exports = {
  Note
}