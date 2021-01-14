import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { NguoiDungEntity } from "../../entities";

export class NguoiNhanDTO {
  @ApiProperty()
  @IsNotEmpty()
  ten: string;
  @ApiProperty()
  @IsNotEmpty()
  diaChi: string;

  @ApiProperty()
  @IsNotEmpty()
  soDienThoai: string;

  @ApiProperty({ example: {
    id: 'id nguoi mua'
  }})
  @IsNotEmpty()
  nguoiDung: NguoiDungEntity
}

export class QueryNguoiNhan {
  @ApiProperty()
  nguoiDungId: string;
}
