import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";

dotenv.config(); // load environment variables from .env file

const dbConfig: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "username",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "database",
  entities: [__dirname + "/../entities/*.ts"],
  synchronize: true, // auto-create database schema from entity classes
};

export default dbConfig;
