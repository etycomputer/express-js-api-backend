import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { TrackingObject } from "./entity/TrackingObject";
import { Marker } from "./entity/Marker";
import { Reading } from "./entity/Reading";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User, TrackingObject, Marker, Reading],
  migrations: [],
  subscribers: [],
});

