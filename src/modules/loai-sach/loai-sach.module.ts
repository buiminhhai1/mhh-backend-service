import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { scanComponents, scanEntities } from '../../common';
import * as repositories from './loai-sach.repository';
import * as services from './loai-sach.service';
import * as controllers from './loai-sach.controller';

@Module({
  imports: [TypeOrmModule.forFeature([...scanEntities(repositories)])],
  providers: [...scanComponents(services)],
  controllers: [...scanComponents(controllers)],
})
export class LoaiSachModule {}
