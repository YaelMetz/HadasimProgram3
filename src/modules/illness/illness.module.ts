import { Module } from '@nestjs/common';
import { IllnessController } from './illness.controller';
import { IllnessService } from './illness.service';
import { Illness } from './illness.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PationtsModule } from '../pationts/pationts.module';

@Module({

    imports: [TypeOrmModule.forFeature([Illness]),
    PationtsModule],
    controllers: [IllnessController],
    providers: [IllnessService],
})
export class IllnessModule {}
