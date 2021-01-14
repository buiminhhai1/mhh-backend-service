import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PhieuDatHangEntity } from "../../../entities";
import { PhieuDatHangDTO, RecieveDateDTO } from "../dto";
import { PhieuDatHangService } from "../services/phieu-dat-hang-service.service";

@Controller('orders')
@ApiTags('Orders')
export class PhieuDatHangController {
  constructor(private readonly pdhService: PhieuDatHangService) {}

  @Post()
  async createOrder(@Body() payload: PhieuDatHangDTO): Promise<PhieuDatHangEntity> {
    return this.pdhService.createOrder(payload);
  }

  @Patch(':id/recieve-date')
  async updateOrderRecieveDate(@Body() payload: RecieveDateDTO, @Param('id') id: string): Promise<void> {
    return this.pdhService.updateRecieveDate(payload, id);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string): Promise<void> {
    return this.pdhService.deleteOrder(id);
  }

  @Get()
  async getOrderByUserId(@Query('nguoiDungId') id: string) {
    return this.pdhService.getOrderByUserId(id);
  }
}
