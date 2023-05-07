import { DataSource } from "typeorm";
import { readwriteConfig } from "../database/readwriteDataSources";
import { MarkerEntity } from "../entities/marker.entity";

const dataSource = new DataSource(readwriteConfig);
dataSource.initialize();
export const MarkerRepository = dataSource.getRepository(MarkerEntity);
