import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Illness {
@PrimaryGeneratedColumn()
illnessId: number;

@Column()
pationtId: number;

@Column()
ilnessDate: Date;

@Column()
recoveryDate: Date;
}