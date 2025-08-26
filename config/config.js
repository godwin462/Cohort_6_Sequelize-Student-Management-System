require("dotenv").config();
const db = process.env.SQL_DATABASE;
const password = process.env.SQL_PASSWORD;
const username = process.env.SQL_USERNAME;
const host = process.env.SQL_HOST;
const dialect = process.env.SQL_dialect;


module.exports = {
  "development": {
    "username": "root",
    "password": "ChelseaFc",
    "database": "school_management_system",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": username,
    "password": password,
    "database": db,
    "host": host,
    "dialect": dialect
  }
};
