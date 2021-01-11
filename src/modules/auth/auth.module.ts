import { Module } from '@nestjs/common';
import { scanComponents } from 'src/common';
import * as services from './auth.service';
import * as controllers from './auth.controller';
import { NguoiDungModule } from '../nguoi-dung';

@Module({
  imports: [NguoiDungModule],
  providers: [...scanComponents(services)],
  controllers: [...scanComponents(controllers)],
  exports: [...scanComponents(services)],
})
export class AuthModule {}
