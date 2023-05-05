import { Connection } from 'typeorm';
import { Marker } from '../../entities/marker';

export default async function seedDefault(connection: Connection): Promise<void> {
  const markers: Marker[] = [
    {
        markerId: -1,
        subnet: 1,
        node: 1,
        activated: false,
        activationTime: new Date("2000-01-23T04:56:10.000+00:00"),
        installPosition: {x:0, y:0, z:0}
    },
    {
        markerId: -1,
        subnet: 1,
        node: 2,
        activated: true,
        activationTime: new Date("2000-01-23T05:56:10.000+00:00"),
        installPosition: {x:0, y:0, z:10}
    },
    {
        markerId: -1,
        subnet: 1,
        node: 3,
        activated: false,
        activationTime: new Date("2000-01-23T08:56:10.000+00:00"),
        installPosition: {x:0, y:0, z:20}
    }
  ];

  await connection.createQueryBuilder().insert().into(Marker).values(markers).execute();
}