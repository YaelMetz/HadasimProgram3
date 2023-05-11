import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pationt } from './pationt.entity';


@Injectable()
export class PationtsService {
  constructor(
    @InjectRepository(Pationt)
    private readonly pationtsRepository: Repository<Pationt>,
  ) {}

  async get(): Promise<Array<Pationt>> {
    return await this.pationtsRepository.find();
  }


  async getById(id: number): Promise<Pationt> {
    const pationt = await this.pationtsRepository.findOneBy({ id: id });
    if(!pationt) {
      throw new BadRequestException(`Pationt with id ${id} dosent exist`);
    }
    return pationt;
  }


  async save(pationt: Pationt): Promise<string> {
   // const checkPationt= await this.pationtsRepository.findOneBy({ id: pationt.id });
   // if(pationt) {
  //    throw new BadRequestException(`Pation with id ${pationt.id} already exist`);
  //  }
    const pationtResponse = await this.pationtsRepository.save(pationt)
    return "Pationt with id " + pationt.id + " added successfully";
  }
}
