import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { LoaiSachEntity } from '../../entities';
import { AdminGuard } from '../auth/admin.guard';
import { LoaiSachDTO } from './loai-sach.dto';
import { LoaiSachService } from './loai-sach.service';

@Controller('categories')
@ApiTags('Books')
export class LoaiSachController {
  constructor(private readonly loaiService: LoaiSachService, private readonly isAdminGuard: AdminGuard) {}
  @Get()
  async getAllCategories(): Promise<LoaiSachEntity[]> {
    return this.loaiService.getAllCategories();
  }

  @Post()
  @UseGuards(new AdminGuard())
  async createCategory(@Body() payload: LoaiSachDTO): Promise<LoaiSachEntity> {
    return this.loaiService.createCategory(payload);
  }

  @Patch(':id/name')
  @UseGuards(new AdminGuard())
  async patchCategory(@Body() payload: LoaiSachDTO, @Param('id') id: string): Promise<void> {
    return this.loaiService.patchCategory(payload, id);
  }

  @Delete(':id')
  @UseGuards(new AdminGuard())
  async deleteCategory(@Param('id') id: string): Promise<void> {
    return this.loaiService.deleteCategory(id);
  }
}
