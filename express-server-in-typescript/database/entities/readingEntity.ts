import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("readings")
export class readingEntity {
  @PrimaryGeneratedColumn()
  readingId!: number;

  @Column("timestamp with time zone")
  @CreateDateColumn()
  timestamp!: Date;

  @Column({ type: "double precision", nullable: true, default: null })
  temperature!: number;

  @Column({ type: "double precision", nullable: true, default: null })
  porePressure!: Date;
}
