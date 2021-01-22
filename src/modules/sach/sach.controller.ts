import { GenericSachReponse, QueryPaginationDTO, QuerySachDTO, SachDTO, UpdateProcessStatus } from './sach.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SachService } from './sach.service';
import { SachEntity } from '../../entities';
import { AdminGuard } from '../auth/admin.guard';

@Controller('books')
@ApiTags('Books')
export class SachController {
  constructor(private readonly sachService: SachService) {}

  @Get('category')
  async getListBook(@Query() query: QuerySachDTO): Promise<GenericSachReponse> {
    return this.sachService.getListBookByCategory(query);
  }

  @Get()
  async getAllBooks(@Query() query: QueryPaginationDTO): Promise<GenericSachReponse> {
    return this.sachService.getListBook(query);
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<SachEntity> {
    return this.sachService.getBookById(id);
  }

  @Post()
  async createBook(@Body() payload: SachDTO): Promise<SachEntity> {
    return this.sachService.createBook(payload);
  }

  @Put(':id')
  async updateBook(@Body() payload: SachDTO, @Param('id') id: string): Promise<void> {
    return this.sachService.updateBook(payload, id);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<void> {
    return this.sachService.deleteBook(id);
  }

  @Patch(':id/process')
  @UseGuards(new AdminGuard())
  async updateProcessSaleBook(@Param('id') id: string, @Body() payload: UpdateProcessStatus): Promise<void> {
    return this.updateProcessSaleBook(id, payload);
  }
}
