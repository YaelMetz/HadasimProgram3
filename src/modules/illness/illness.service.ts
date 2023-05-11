import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { Illness } from './illness.entity';
import { PationtsService } from '../pationts/pationts.service';

@Injectable()
export class IllnessService {
  constructor(
    @InjectRepository(Illness)
    private readonly illnessRepository: Repository<Illness>,
    private readonly pationtsService: PationtsService
    ) {}
  
    //help function to check if thae patient with this ID exists
  async isPationtExist(pationtId: number) {
    const pationt = await this.pationtsService.getById(pationtId);
    return !!pationt;
  }

  async get(): Promise<Array<Illness>> {
    return await this.illnessRepository.find();
  }

  async getByPationtId(id: number): Promise<Illness>{
    if(!(await this.isPationtExist(id))) {
      throw new BadRequestException(`Patient with id ${id} dosen't exist`);
    }

    return await this.illnessRepository.findOneBy({pationtId: id });
  }

  async saveIllness(illness: Illness): Promise<string> {
    if(!(await this.isPationtExist(illness.pationtId))) {
      throw new BadRequestException(`Patient with id ${illness.pationtId} dosen't exist`);
    }
    
    const sumOfVaccines = (await this.illnessRepository.findBy({
      pationtId: illness.pationtId  })).length;

      //a patient can not be ill more than once
    if(sumOfVaccines >= 1) {    
      throw new BadRequestException("This patient was already ill");
    }
    const illnessResponse = await this.illnessRepository.save(illness)
    return `The illness of pationt with id ${illness.pationtId} added successfully`;
  }
 
  
}