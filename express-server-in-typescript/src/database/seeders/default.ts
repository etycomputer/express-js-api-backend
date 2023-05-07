import { DataSource } from "typeorm";
import { MarkerEntity } from "../../entities/marker.entity";
import logger from "../../configs/logging";

export default async function seedDefault(
  connection: DataSource
): Promise<void> {
  logger.info("step 2.1");
  const markers: MarkerEntity[] = [
    {
      markerId: -1,
      subnet: 1,
      node: 1,
      x: 0,
      y: 0,
      z: 0,
      activated: false,
      activationTime: new Date("2000-01-23T04:56:10.000+00:00"),
    },
    {
      markerId: -1,
      subnet: 1,
      node: 2,
      x: 0,
      y: 0,
      z: 10,
      activated: true,
      activationTime: new Date("2000-01-23T05:56:10.000+00:00"),
    },
    {
      markerId: -1,
      subnet: 1,
      node: 3,
      x: 0,
      y: 0,
      z: 20,
      activated: false,
      activationTime: new Date("2000-01-23T08:56:10.000+00:00"),
    },
  ];
  logger.info("step 2.2");
  await connection
    .createQueryBuilder()
    .insert()
    .into(MarkerEntity)
    .values(markers)
    .execute();
}
