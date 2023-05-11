import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IllnessService } from './illness.service';
import { CreateIllnessDto } from './dto/create.illness.dto';
import { Illness } from './illness.entity';

@Controller('illness')
export class IllnessController {
    constructor(private readonly illnessService: IllnessService) {}

    @Get()
    getAll() :Promise<Array<Illness>> 
    {
        return this.illnessService.get();
    }
    
    @Get(":pationtId")
    getById(@Param() params: any): Promise<Illness> {
      return this.illnessService.getByPationtId(params.pationtId);
    }
  
    @Post()
    createOneIllness(@Body() dto: CreateIllnessDto): Promise<string> {
      const illness = new Illness();
      illness.pationtId = dto.pationtId;
      illness.ilnessDate = dto.ilnessDate;
      illness.recoveryDate = dto.recoveryDate;

      return this.illnessService.saveIllness(illness);
    }
}
