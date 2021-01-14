import * as repositories from './nguoi-nhan.repository';
import * as controllers from './nguoi-nhan.controller';
import * as services from './nguoi-nhan.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { scanComponents, scanEntities } from '../../common';

@Module({
  imports: [TypeOrmModule.forFeature([...scanEntities(repositories)])],
  providers: [...scanComponents(services)],
  controllers: [...scanComponents(controllers)],
})
export class NguoiNhanModule {}
