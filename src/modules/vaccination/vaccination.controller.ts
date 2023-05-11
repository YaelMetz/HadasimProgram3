import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import { CreateVaccinationDto } from './dto/create.vaccination.dto';
import { Vaccination } from './vaccination.entity';

@Controller('vaccination')
export class VaccinationController {
    constructor(private readonly vaccinationService: VaccinationService) {}

    @Get()
    getAll() :Promise<Array<Vaccination>> 
    {
        return this.vaccinationService.get();
    }

    @Get(":pationtId")
    getById(@Param() params: any): Promise<Array<Vaccination>> {
      return this.vaccinationService.getByPationtId(params.pationtId);
    }
  
    @Post()
    createOneVaccination(@Body() dto: CreateVaccinationDto): Promise<string> {
      const vaccination = new Vaccination();
      vaccination.pationtId = dto.pationtId;
      vaccination.vaccinationDate = dto.vaccinationDate;
      vaccination.vaccinationProducer = dto.vaccinationProducer;

      return this.vaccinationService.saveVaccination(vaccination);
    }
}