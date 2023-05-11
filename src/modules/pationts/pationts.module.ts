import { Module } from '@nestjs/common';
import { PationtsController } from './pationts.controller';
import { PationtsService } from './pationts.service';
import { Pationt } from './pationt.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Pationt])],
    controllers: [PationtsController],
    providers: [PationtsService],
    exports: [PationtsService]
})
export class PationtsModule { }
