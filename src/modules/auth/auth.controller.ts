import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NguoiDungEntity } from 'src/entities';
import { NguoiDungService } from '../nguoi-dung';
import { CredentialDTO, TokenJWTDTO } from './auth.dto';
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
  async login(@Body() payload: Partial<CredentialDTO>): Promise<TokenJWTDTO> {
    return await this.authService.login(payload);
  }
}
