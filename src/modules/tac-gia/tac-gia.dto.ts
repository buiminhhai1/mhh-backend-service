import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsUrl } from "class-validator";

export class TacGiaDTO {
  @ApiProperty()
  @IsNotEmpty()
  public ten: string;

  @ApiProperty()
  @IsNotEmpty()
  public ngaySinh: Date;

  @ApiProperty()
  @IsOptional()
  public ngayMat: Date;

  @ApiProperty({ example: 'https://image-link'})
  @IsNotEmpty()
  @IsUrl()
  public anh: string;
}
