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

// -----------------------
// Pasos

// npm init -y

// npm i express mysql2 sequelize sequelize-cli

// ./node_modules/.bin/sequelize init

// ./node_modules/.bin/sequelize migration:create --name CreateTableProducts

// ./node_modules/.bin/sequelize migration:create --name CreateTableReviews

// ./node_modules/.bin/sequelize db:migrate

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(3000, () => {
  console.log(`Express on port 3000`);
});