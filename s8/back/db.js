const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');

// Database connection
const sequelize = new Sequelize('andres', 'admin', 'AGb5sQGz', {
  host: 'mysql-62657-0.cloudclusters.net',
  dialect: 'mysql',
  port: 19878,
  logging: false,
});

// Getting models
const models = [
  Product,
  Review,
  User
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { products, reviews } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table

module.exports = sequelize;