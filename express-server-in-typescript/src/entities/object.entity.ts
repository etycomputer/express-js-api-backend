import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IObject } from "../interfaces/object.interface";

@Entity({ name: "objects" })
export class ObjectEntity implements IObject {
  @PrimaryGeneratedColumn()
  objectId!: number;

  @Column({ type: "text", unique: true })
  serial!: string;

  @Column({ type: "integer", default: -1 })
  holeId!: number;
}
