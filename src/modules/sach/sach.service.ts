import { Injectable } from '@nestjs/common';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from './../../common';
import { SachRepository } from './sach.repository';
import { SachDTO, QuerySachDTO } from './sach.dto';
import { SachEntity } from '../../entities';

@Injectable()
export class SachService {
  constructor(private readonly sachRepo: SachRepository) {}

  async createBook(payload: SachDTO): Promise<SachEntity> {
    return this.sachRepo.save(this.sachRepo.create(payload));
  }

  async getListBookByCategory(payload: QuerySachDTO): Promise<SachEntity[]> {

    const res = this.sachRepo.createQueryBuilder('sach')
      .where('sach.loai.id = :loaiId', { loaiId: payload.loaiId })
      .orderBy('sach.createdAt', 'ASC')
      .limit(payload.limit || DEFAULT_LIMIT)
      .skip(payload.page || DEFAULT_PAGE)
      .getManyAndCount()
    console.log('res');
    return [];
  }

  async updateBook(payload: SachDTO, id: string): Promise<void> {
    await this.sachRepo.update(id, payload);
  }

  async getListBook(payload: Partial<QuerySachDTO>): Promise<any> {
    const res = await this.sachRepo.createQueryBuilder('book')
      .orderBy('book.createdAt', 'ASC')
      .limit(payload.limit || DEFAULT_LIMIT)
      .skip(payload.page || DEFAULT_PAGE)
      .getManyAndCount();
    console.log('res', res);
  }

  async deleteBook(id: string): Promise<void> {
    await this.sachRepo.delete(id);
  }
}
