import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { NguoiDungVaiTro } from 'src/entities/nguoi-dung.entity';

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
  public ten: string;

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
