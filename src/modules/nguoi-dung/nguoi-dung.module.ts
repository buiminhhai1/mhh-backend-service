import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { scanComponents, scanEntities } from '../../common';
import { DatabaseModule } from '../database';
import * as repositories from './nguoi-dung.repository';
import * as controllers from './nguoi-dung.controller';
import { NguoiDungService } from './nguoi-dung.service';

@Module({
  imports: [TypeOrmModule.forFeature([...scanEntities(repositories)]), DatabaseModule],
  providers: [NguoiDungService],
  controllers: [...scanComponents(controllers)],
  exports: [NguoiDungService],
})
export class NguoiDungModule {}
