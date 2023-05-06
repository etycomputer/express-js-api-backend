import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("objects")
export class objectEntity {
  @PrimaryGeneratedColumn()
  objectsId!: number;

  @Column({ type: "text", unique : true})
  serial!: string;

  @Column({ type: "integer", default: -1 })
  holeId!: number;
}
