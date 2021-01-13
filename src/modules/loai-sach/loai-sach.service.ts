import { Injectable } from '@nestjs/common';
import { LoaiSachRepository } from "./loai-sach.repository";
import { LoaiSachEntity } from '../../entities';
import { LoaiSachDTO } from './loai-sach.dto';

@Injectable()
export class LoaiSachService {
  constructor(private readonly loaiRepo: LoaiSachRepository) {}

  async getAllCategories(): Promise<LoaiSachEntity[]> {
    return await this.loaiRepo.createQueryBuilder('category').orderBy('category.createdAt', 'ASC').getMany();
  }

  async createCategory(payload: LoaiSachDTO): Promise<LoaiSachEntity> {
    return await this.loaiRepo.save(this.loaiRepo.create(payload));
  }

  async patchCategory(payload: LoaiSachDTO, id: string): Promise<void> {
    await this.loaiRepo.update(id, payload);
  }

  async deleteCategory(id: string): Promise<void> {
    await this.loaiRepo.delete(id);
  }
}
