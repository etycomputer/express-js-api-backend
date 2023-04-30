import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("string")
  firstName!: string;

  @Column("string")
  lastName!: string;

  @Column("string")
  username!: string;

  @Column("string")
  passwordHash!: string;
}

