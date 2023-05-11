import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PationtsService } from './pationts.service';
import { CreatePationtDto } from './dto/create-pationt.dto';
import { Pationt } from './pationt.entity';

@Controller('pationts')
export class PationtsController {
    constructor(private readonly pationtsService: PationtsService) {}

    @Get()
    getAll(): Promise<Array<Pationt>> {
      return this.pationtsService.get();
    }

    @Get(":id")
    getById(@Param() params: any): Promise<Pationt> {
      return this.pationtsService.getById(params.id);
    }
  
    @Post()
    createOne(@Body() dto: CreatePationtDto): Promise<string> {
      const pationt = new Pationt();
      pationt.firstName = dto.firstName;
      pationt.lastName = dto.lastName;
      pationt.id = dto.id;
      pationt.address = dto.address;
      pationt.birthDate = dto.birthDate;
      pationt.phoneNumber = dto.phoneNumber;
      pationt.mobilePhoneNumber = dto.mobilePhoneNumber;
      return this.pationtsService.save(pationt);
    }   
}
