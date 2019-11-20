import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BonusRate {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column('int')
  YearDuration: number;

  @Column('int')
  BonusRate: number; 

}