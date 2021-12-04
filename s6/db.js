const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');

// Database connection
const sequelize = new Sequelize('andreszzz', 'admin', 'gYGRQ0Kr', {
  host: 'mysql-60632-0.cloudclusters.net',
  dialect: 'mysql',
  port: 11198,
  logging: false,
});

// Getting models
const models = [
  Product,
  Review,
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { products, reviews } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table

module.exports = sequelize;