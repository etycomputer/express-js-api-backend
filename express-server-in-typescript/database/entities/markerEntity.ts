import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity("markers")
export class markerEntity {
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

  @Column("timestamp with time zone")
  @CreateDateColumn()
  activationTime!: Date;
}
