import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marker {
  @PrimaryGeneratedColumn()
  markerId!: number;

  @Column("integer")
  subnet!: number;

  @Column("integer")
  node!: number;

  @Column({ type: "boolean", default: false })
  activated!: boolean;

  @Column("datetime")
  activationTime!: Date;

  @Column("jsonb")
  installPosition!: { x: number; y: number; z: number };
}
