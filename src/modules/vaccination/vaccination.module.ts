import { Module } from '@nestjs/common';
import { VaccinationController } from './vaccination.controller';
import { VaccinationService } from './vaccination.service';
import { Vaccination } from './vaccination.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PationtsModule } from '../pationts/pationts.module';

@Module({
    imports: [TypeOrmModule.forFeature([Vaccination]),
    PationtsModule],
    controllers: [VaccinationController],
    providers: [VaccinationService],  
})
export class VaccinationModule {}