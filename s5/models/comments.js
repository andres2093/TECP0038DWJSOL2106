module.exports = (sequelize, type) => {
  return sequelize.define('Comment', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: type.STRING,
    content: type.TEXT,
    userId: type.INTEGER
  })
}