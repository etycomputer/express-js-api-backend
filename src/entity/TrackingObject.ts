import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TrackingObject {
  @PrimaryGeneratedColumn()
  objectId!: number;

  @Column("string")
  serial!: string;

  @Column({ type: "integer", default: -1 })
  holeId!: number;
}

