import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { scanComponents, scanEntities } from '../../common';
import * as repositories from './repositories';
import * as services from './sach.service';
import * as controllers from './sach.controller';
import { AuthModule } from '../auth';
import { DatabaseModule } from '../database';

@Module({
  imports: [TypeOrmModule.forFeature([...scanEntities(repositories)]), AuthModule, DatabaseModule],
  providers: [...scanComponents(services)],
  controllers: [...scanComponents(controllers)],
})
export class SachModule {}
