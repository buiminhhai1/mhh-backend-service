import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IsEmail, IsString, IsUUID } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { omit } from 'lodash';
import { CredentialDTO, TokenJWTDTO } from './auth.dto';

export class AuthPayloadDTO {
  @IsUUID()
  tenantId: string;

  @IsUUID()
  userId: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;
}

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
  async login(payload): Promise<TokenJWTDTO> {
    const credential = { username: payload.username, sub: payload.id };
    return {
      access_token: await this.encode(credential),
    };
  }
}

// import { Repository } from 'typeorm';
// import { ConflictException, Inject, Injectable } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';
// import { omit } from 'lodash';
// import { AuthService } from 'src/common';
// import { NguoiDungEntity } from 'src/entities';
// // import { NguoiDungRepository } from '../nguoi-dung/nguoi-dung.repository';
// import { CredentialDTO } from './auth.dto';

// @Injectable()
// export class AuthenticateService {
//   constructor(
//     // private readonly nguoiDungRepo: NguoiDungRepository,
//     private readonly authService: AuthService,
//   ) {}

//   async register(payload: CredentialDTO): Promise<Partial<NguoiDungEntity>> {
//     // const user = await this.nguoiDungRepo
//     //   .createQueryBuilder('user')
//     //   .where('user.tenDangNhap = :username', { username: payload.tenDangNhap })
//     //   .getOne();
//     // if (user) {
//     //   throw new ConflictException(`ten dang nhap ${payload.tenDangNhap} da ton tai`);
//     // }
//     // const matKhau = await bcrypt.hash(user.matKhau, 10);
//     // const newUser = await this.nguoiDungRepo.save(this.nguoiDungRepo.create({ ...payload, matKhau }));
//     // return omit(newUser, 'matKhau');
//     console.log('hii');
//     return null;
//   }

//   // async login(payload) {
//   //   const credential = { username: payload.username, sub: payload.id };
//   //   return {
//   //     access_token: this.jwtService.sign(credential),
//   //   };
//   // }
// }
