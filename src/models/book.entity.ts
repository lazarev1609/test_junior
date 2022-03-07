import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class book {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column({default: null})
  user_id: string;

}