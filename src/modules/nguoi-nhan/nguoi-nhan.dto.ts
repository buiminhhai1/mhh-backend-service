import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

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
}

export class QueryNguoiNhan {
  @ApiProperty()
  nguoiNhanId: string;
}
