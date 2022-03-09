import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { book } from './book.entity';
@Entity()
export class user {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({default: false})
  abonement: boolean;

  @OneToMany(() => book, book => book.user_id, { eager: true, cascade: true } )
  @JoinColumn() books: book[];
    
}