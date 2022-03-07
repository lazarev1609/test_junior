import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class user {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({default: null})
  abonement: string;

}