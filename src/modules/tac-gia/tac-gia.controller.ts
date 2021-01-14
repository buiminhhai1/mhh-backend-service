import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TacGiaEntity } from "../../entities";
import { AdminGuard } from "../auth/admin.guard";
import { TacGiaDTO } from "./tac-gia.dto";
import { TacGiaService } from "./tac-gia.service";

@Controller('authors')
@ApiTags('Authors')
export class TacGiaController {
  constructor(private readonly tacGiaService: TacGiaService) {}
  @Post()
  @UseGuards(new AdminGuard())
  async createAuth(@Body() payload: TacGiaDTO): Promise<TacGiaEntity> {
    return this.tacGiaService.createAuth(payload);
  }

  @Get(':id')
  async getAuthById(@Param('id') id: string): Promise<TacGiaEntity> {
    return this.tacGiaService.getDetailAuth(id);
  }

  @Get()
  async getAllAuthors(): Promise<TacGiaEntity[]> {
    return this.tacGiaService.getAllAuths();
  }

  @Put(':id')
  @UseGuards(new AdminGuard())
  async updateAuthor(@Body() payload: TacGiaDTO, @Param('id') id: string): Promise<void> {
    return this.tacGiaService.updateAuth(payload, id);
  }
}
