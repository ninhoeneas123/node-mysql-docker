import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js"; 

const dbName = process.env.DB_NAME; 
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const dataBase = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost, 
});

export default dataBase;