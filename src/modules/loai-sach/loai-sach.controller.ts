import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { LoaiSachEntity } from '../../entities';
import { LoaiSachDTO } from './loai-sach.dto';
import { LoaiSachService } from './loai-sach.service';

@Controller('categories')
@ApiTags('Books')
export class LoaiSachController {
  constructor(private readonly loaiService: LoaiSachService) {}
  @Get()
  async getAllCategories(): Promise<LoaiSachEntity[]> {
    return this.loaiService.getAllCategories();
  }

  @Post()
  async createCategory(@Body() payload: LoaiSachDTO): Promise<LoaiSachEntity> {
    return this.loaiService.createCategory(payload);
  }

  @Patch(':id/name')
  async patchCategory(@Body() payload: LoaiSachDTO, @Param('id') id: string): Promise<void> {
    return this.loaiService.patchCategory(payload, id);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<void> {
    return this.loaiService.deleteCategory(id);
  }
}
