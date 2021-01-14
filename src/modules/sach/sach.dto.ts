import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { LoaiSachEntity, TacGiaEntity } from '../../entities';

export class SachDTO {
  @IsNotEmpty()
  @ApiProperty()
  ten: string

  @IsNotEmpty()
  @ApiProperty()
  moTa: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  hinhAnh: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  gia: number;

  @ApiProperty()
  nhaXuatBan: string;

  @IsNotEmpty()
  @ApiProperty({ example: { id: 'id'}})
  tacGia: TacGiaEntity;

  @IsNotEmpty()
  @ApiProperty({ example: {id: 'id loai' }})
  loai: LoaiSachEntity;
}

export class QuerySachDTO {
  @IsNotEmpty()
  @IsString()
  loaiId: string;

  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;
}
