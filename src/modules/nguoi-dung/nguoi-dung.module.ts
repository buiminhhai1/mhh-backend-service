import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { scanComponents, scanEntities } from '../../common';
import * as repositories from './nguoi-dung.repository';
import { NguoiDungService } from './nguoi-dung.service';

@Module({
  imports: [TypeOrmModule.forFeature([...scanEntities(repositories)])],
  providers: [NguoiDungService],
  exports: [NguoiDungService],
})
export class NguoiDungModule {}
