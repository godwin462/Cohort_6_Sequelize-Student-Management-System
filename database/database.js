const {Sequelize} = require('sequelize');
require("dotenv").config();

const db = process.env.SQL_DATABASE;
const password = process.env.SQL_PASSWORD;
const username = process.env.SQL_USERNAME;
const host = process.env.SQL_HOST;
const dialect = process.env.SQL_dialect;

const sequelize = new Sequelize(db, username, password, {
  host,
  dialect: 'mysql'
});

module.exports = sequelize;
