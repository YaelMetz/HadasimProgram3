import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { Vaccination } from './vaccination.entity';
import { PationtsService } from '../pationts/pationts.service';

@Injectable()
export class VaccinationService {
  constructor(
    @InjectRepository(Vaccination)
    private readonly vaccinationRepository: Repository<Vaccination>,
    private readonly pationtsService: PationtsService
    ) {}
  
//help function to check if thae patient with this ID exists
  async isPationtExist(pationtId: number) {
    const pationt = await this.pationtsService.getById(pationtId);
    return !!pationt;
  }

  async get(): Promise<Array<Vaccination>> {
    return await this.vaccinationRepository.find();
  }


  async getByPationtId(pationtId: number): Promise<Array<Vaccination>> {
    if(!this.isPationtExist(pationtId)) {
      throw new BadRequestException(`Pationt with id ${pationtId} dosen't exist`);
    }
    return await this.vaccinationRepository.findBy({ pationtId: pationtId });
  }


  async saveVaccination(vaccination: Vaccination): Promise<string> {
    if(!this.isPationtExist(vaccination.pationtId)) {
      throw new BadRequestException(`Pation with id ${vaccination.pationtId} dosent exist`);
    }

    const sumOfVaccines = (await this.vaccinationRepository.findBy({
      pationtId: vaccination.pationtId, 
      vaccinationDate: Not(IsNull()),
      vaccinationProducer: Not(IsNull())
    })).length;

    //a patient can not get more than 4 vaccination
    if(sumOfVaccines >= 4) {
      throw new BadRequestException("This pationt already recived 4 vaccines");
    }
    const vaccinationResponse = await this.vaccinationRepository.save(vaccination)
    return `The vaccination of pationt with id ${vaccination.pationtId} added successfully`;
  }
 
  
}