import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";
import { IMarker } from "../interfaces/marker.interface";

@Entity({ name: "markers" })
export class MarkerEntity implements IMarker {
  @PrimaryGeneratedColumn()
  markerId!: number;

  @Column("integer")
  subnet!: number;

  @Column("integer")
  node!: number;

  @Column("double precision")
  x!: number;

  @Column("double precision")
  y!: number;

  @Column("double precision")
  z!: number;

  @Column({ type: "boolean", default: false })
  activated!: boolean;

  @Column({ type: "timestamp with time zone", nullable: true, default: null })
  @CreateDateColumn()
  activationTime!: null | Date;
}
