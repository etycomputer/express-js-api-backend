import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Reading {
  @PrimaryGeneratedColumn()
  readingId!: number;

  @Column("datetime")
  timestamp!: string;

  @Column("float")
  temperature!: number;

  @Column("float")
  porePressure!: number;
}

