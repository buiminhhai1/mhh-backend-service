import { Body, Controller, Get, Patch, Post, Query, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NguoiDungEntity } from '../../entities';
import { NguoiDungService } from '../nguoi-dung';
import { AdminGuard } from './admin.guard';
import { ChangePasswordDTO, CredentialDTO, GenericNguoiDungResponsive, LoginDTO, PaginationAuthDTO, TokenJWTDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('Credential')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly nguoiDungService: NguoiDungService) {}

  @Post('register')
  async register(@Body() payload: CredentialDTO): Promise<Partial<NguoiDungEntity>> {
    return await this.nguoiDungService.register(payload);
  }

  @Post('login')
  async login(@Body() payload: LoginDTO): Promise<TokenJWTDTO> {
    const credential = await this.nguoiDungService.veriffyUser(payload);
    if (!credential) {
      throw new UnauthorizedException();
    }
    return await this.authService.login(credential);
  }

  @Get('users')
  @UseGuards(new AdminGuard())
  async getUsers(@Query() payload: PaginationAuthDTO): Promise<GenericNguoiDungResponsive> {
    return await this.nguoiDungService.getUsers(payload);
  }

  @Get('admin')
  async verifyAdminMiddleware(): Promise<Boolean> {
    return true;
  }

  @Patch('password')
  async changePassword(@Body() payload: ChangePasswordDTO): Promise<void> {
    return await this.nguoiDungService.changePassword(payload.passwordUpdated)
  }
}
