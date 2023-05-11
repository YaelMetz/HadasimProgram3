import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pationt {
  @PrimaryGeneratedColumn()
  pationtId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  id: number;

  @Column()
  address: string;

  @Column()
  birthDate: Date;

  @Column()
  phoneNumber: string;

  @Column()
  mobilePhoneNumber: string;  
}