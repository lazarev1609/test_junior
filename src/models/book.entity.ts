import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { user } from './user.entity';

@Entity()
export class book {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @ManyToOne( () => user, user => user.books )
  user_id: user;
}