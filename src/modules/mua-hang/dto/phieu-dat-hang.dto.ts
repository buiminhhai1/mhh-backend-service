import { NguoiNhanEntity, NguoiDungEntity } from './../../../entities/';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { ChiTietPhieuDatHangDTO } from './chi-tiet-phieu-dat-hang.dto';

export class PhieuDatHangDTO {
  @ApiProperty()
  @IsNotEmpty()
  ngayMua: Date;

  @ApiProperty()
  @IsOptional()
  ngayGiao: Date;

  @ApiProperty({ example: { id: 'id-nguoi-nhan' }})
  @IsNotEmpty()
  nguoiNhan: NguoiNhanEntity;

  @ApiProperty({ example: { id: 'id-nguoi-nhan' }})
  @IsNotEmpty()
  nguoiMua: NguoiDungEntity;

  @ApiProperty({
    example: [{ sach: {id: 'id sach'}, soLuong: 10, donGiaHienHanh: 2000 }]
  })
  @IsNotEmpty()
  dsChiTietPhieuDatHang: ChiTietPhieuDatHangDTO[];

}

export class RecieveDateDTO {
  @ApiProperty()
  @IsNotEmpty()
  ngayGiao: Date;
}
