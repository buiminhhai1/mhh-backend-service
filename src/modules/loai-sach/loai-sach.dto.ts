import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoaiSachDTO {
  @ApiProperty()
  @IsNotEmpty()
  public ten: string;
}
