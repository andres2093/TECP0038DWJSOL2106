module.exports = (sequelize, type) => {
  return sequelize.define('User', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    lastname: type.STRING,
    imageProfile: type.STRING,
    bio: type.STRING,
    type: {
      type: type.ENUM,
      values: ['author', 'reader']
    }
  })
}