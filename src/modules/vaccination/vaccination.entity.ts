import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vaccination {
  @PrimaryGeneratedColumn()
  vaccinationId: number;

  @Column()
  pationtId: number;

  @Column() 
  vaccinationDate: Date;

  @Column() 
  vaccinationProducer: string;

}