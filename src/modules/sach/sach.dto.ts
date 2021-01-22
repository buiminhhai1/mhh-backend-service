import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { LoaiSachEntity, SachEntity, TacGiaEntity, TinhTrangDuyet } from '../../entities';

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
  @ApiProperty({ example: { name: 'nhap ten tac gia vo' }})
  tacGia: TacGiaEntity;

  @IsNotEmpty()
  @ApiProperty({ example: {id: 'id loai' }})
  loai: LoaiSachEntity;

  @IsNotEmpty()
  @ApiProperty({ example: 10 })
  soLuong: number;
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

export class UpdateProcessStatus {
  @ApiProperty({ enum: TinhTrangDuyet, default: TinhTrangDuyet.duocDuyet })
  status: TinhTrangDuyet;
}
