import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PationtsModule } from './modules/pationts/pationts.module';
import { IllnessModule } from './modules/illness/illness.module';
import { VaccinationModule } from './modules/vaccination/vaccination.module';

@Module({

  imports: [PationtsModule,// VaccinationModule, IllnessModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'server-with-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    IllnessModule,
    VaccinationModule,
],

})
export class AppModule {}
