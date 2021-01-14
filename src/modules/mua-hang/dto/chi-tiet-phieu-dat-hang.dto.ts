import { PhieuDatHangEntity, SachEntity } from './../../../entities';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ChiTietPhieuDatHangDTO {
  @IsNotEmpty()
  @ApiProperty({ example: { id: 'id-sach'}})
  sach: SachEntity;

  @IsNotEmpty()
  @ApiProperty()
  soLuong: number;

  @IsNotEmpty()
  @ApiProperty()
  donGiaHienHanh: number;
}
