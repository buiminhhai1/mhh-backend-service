import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { NguoiNhanEntity } from "../../entities";
import { NguoiNhanDTO, QueryNguoiNhan } from "./nguoi-nhan.dto";
import { NguoiNhanService } from "./nguoi-nhan.service";

@Controller('recievers')
@ApiTags('Recievers')
export class NguoiNhanController {
  constructor(private readonly nguoiNhanService: NguoiNhanService) {}

  @Post()
  async createReciever(@Body() payload: NguoiNhanDTO): Promise<NguoiNhanEntity> {
    return this.nguoiNhanService.createReciever(payload);
  }

  @Get()
  async getRecieverByUserId(@Query() payload: QueryNguoiNhan): Promise<NguoiNhanEntity[]> {
    console.log('payload', payload);
    return this.nguoiNhanService.getRecieversByUserId(payload.nguoiDungId);
  }

  @Put(':id')
  async updateReciever(@Body() payload: NguoiNhanDTO, @Param('id') id: string): Promise<void> {
    return this.nguoiNhanService.updateReciever(payload, id);
  }

  @Delete(':id')
  async deleteReciver(@Param('id') id: string): Promise<void> {
    return this.nguoiNhanService.deleteReciver(id);
  }
}
