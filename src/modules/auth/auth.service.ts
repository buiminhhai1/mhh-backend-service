import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IsEmail, IsEnum, IsString, IsUUID } from 'class-validator';
import { AuthPayloadDTO, TokenJWTDTO } from './auth.dto';
import { NguoiDungEntity, NguoiDungVaiTro } from '../../entities';


@Injectable()
export class AuthService {
  constructor(private readonly jwtSevice: JwtService) {}

  async encode(payload: Partial<AuthPayloadDTO>): Promise<string> {
    return this.jwtSevice.signAsync(payload);
  }

  async decode(token: string): Promise<AuthPayloadDTO> {
    try {
      return await this.jwtSevice.verifyAsync(token);
    } catch (err) {
      throw new UnauthorizedException('Access Token illegal');
    }
  }
  async login(payload: Partial<NguoiDungEntity>): Promise<TokenJWTDTO> {
    return {
      access_token: await this.encode(payload),
    };
  }
}
