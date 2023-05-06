import { DataSourceOptions, DataSource } from "typeorm";

require("dotenv").config();

const adminConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_ADMIN_USERNAME!,
  password: process.env.DB_ADMIN_PASSWORD!,
  database: process.env.DB_NAME!,
  entities: ["./database/entities/**/*.ts"],
  migrations: ["./database/migrations/**/*.ts"],
  logging: true,
  synchronize: false,
};

export const adminDataSource = new DataSource(adminConfig);
