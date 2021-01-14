import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { LoaiSachEntity, SachEntity, TacGiaEntity } from '../../entities';

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
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  loaiId: string;

  @ApiProperty()
  page: string;

  @ApiProperty()
  limit: string;
}

export class QueryPaginationDTO {
  @ApiProperty()
  page: string;

  @ApiProperty()
  limit: string;
}
export class GenericSachReponse {
  data: SachEntity[];
  total: number;
  next: number;
}
