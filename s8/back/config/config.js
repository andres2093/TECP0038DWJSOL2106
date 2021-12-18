require('dotenv').config();

const defaultConfig = {
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORT,
  dialect: process.env.DIALECT,
};

module.exports = {
  development: defaultConfig,
  production: Object.assign(defaultConfig, {
    /** You can override the default config here */
  }),
};