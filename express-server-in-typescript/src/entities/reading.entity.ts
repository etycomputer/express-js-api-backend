import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";
import { IReading } from "../interfaces/reading.interface";

@Entity({ name: "readings" })
export class ReadingEntity implements IReading {
  @PrimaryGeneratedColumn()
  readingId!: number;

  @Column("integer")
  markerId!: number;

  @Column("timestamp with time zone")
  @CreateDateColumn()
  timestamp!: Date;

  @Column({ type: "double precision", nullable: true, default: null })
  temperature!: null | number;

  @Column({ type: "double precision", nullable: true, default: null })
  porePressure!: null | number;
}
