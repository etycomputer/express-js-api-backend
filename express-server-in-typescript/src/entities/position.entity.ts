import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";
import { IPosition } from "../interfaces/position.interface";

@Entity({ name: "positions" })
export class PositionEntity implements IPosition {
  @PrimaryGeneratedColumn()
  positionId!: number;

  @Column("integer")
  objectId!: number;

  @Column("double precision")
  x!: number;

  @Column("double precision")
  y!: number;

  @Column("double precision")
  z!: number;

  @Column("timestamp with time zone")
  @CreateDateColumn()
  timestamp!: Date;
}
