import { QuerySachDTO, SachDTO } from './sach.dto';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SachService } from './sach.service';
import { SachEntity } from '../../entities';

@Controller('books')
@ApiTags('Books')
export class SachController {
  constructor(private readonly sachService: SachService) {}

  @Get()
  async getListBook(@Query() query: QuerySachDTO): Promise<any> {
    return this.sachService.getListBook(query);
  }

  @Post()
  async createBook(@Body() payload: SachDTO): Promise<SachEntity> {
    return this.sachService.createBook(payload);
  }
}
