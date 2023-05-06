import { DataSourceOptions, DataSource } from "typeorm";

require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";

const readonlyConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_RO_USERNAME!,
  password: process.env.DB_RO_PASSWORD!,
  database: process.env.DB_NAME!,
  entities: ["./database/entities/**/*.js"],
  migrations: ["./database/migrations/**/*.js"],
  logging: !isProd,
  synchronize: false,
};

export const readonlyDataSource = new DataSource(readonlyConfig);
