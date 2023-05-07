import { DataSourceOptions, DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const isProd = process.env.NODE_ENV === "production";

export const readwriteConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_RW_USERNAME!,
  password: process.env.DB_RW_PASSWORD!,
  database: process.env.DB_NAME!,
  entities: ["./**/*.entity.ts"],
  migrations: ["./database/migrations/**/*.ts"],
  logging: !isProd,
  synchronize: false,
};

export const readwriteDataSource = new DataSource(readwriteConfig);
