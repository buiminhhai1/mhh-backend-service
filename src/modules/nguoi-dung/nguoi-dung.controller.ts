import { NguoiDungEntity } from './../../entities/nguoi-dung.entity';
import { Controller, Get, Inject } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TenantAwareContext } from "../database/providers";
import { NguoiDungService } from "./nguoi-dung.service";
import { omit } from 'lodash';

@Controller('users')
@ApiTags('Users')
export class NguoiDungController {
  constructor(
    private readonly nguoiDungService: NguoiDungService,
    @Inject(TenantAwareContext) private readonly context: TenantAwareContext
  ) {}

  @Get('me')
  async getUserDetail(): Promise<Partial<NguoiDungEntity>> {
    return omit(await this.nguoiDungService.getUserById(this.context.userId), 'matKhau');
  }
}
