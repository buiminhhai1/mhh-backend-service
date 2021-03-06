import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { NguoiDungEntity, NguoiDungVaiTro } from '../../entities/nguoi-dung.entity';

export class TokenJWTDTO {
  public access_token: string;
}

export class LoginDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public tenDangNhap: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public matKhau: string;
}

export class CredentialDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public hoTen: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public tenDangNhap: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public matKhau: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public soDienThoai: string;

  @ApiProperty()
  @IsString()
  public diaChi: string;

  @ApiProperty({ enum: NguoiDungVaiTro, examples: [NguoiDungVaiTro.khachHang, NguoiDungVaiTro.quanLy] })
  @IsEnum(NguoiDungVaiTro)
  public vaiTro: NguoiDungVaiTro;
}


export class PaginationAuthDTO {
  @ApiProperty()
  page: string;

  @ApiProperty()
  limit: string;
}

export class GenericNguoiDungResponsive {
  data: Partial<NguoiDungEntity>[];
  total: number;
  next: number;
}

export class AuthPayloadDTO {
  @IsUUID()
  tenantId: string;

  @IsUUID()
  id: string;

  @IsString()
  tenDangNhap: string;

  @IsEmail()
  email: string;

  @IsEnum(NguoiDungVaiTro)
  vaiTro: NguoiDungVaiTro;
}

export class ChangePasswordDTO {
  @ApiProperty()
  passwordUpdated: string;
}
