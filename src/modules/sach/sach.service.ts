import { Inject, Injectable } from '@nestjs/common';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from './../../common';
import { SachDTO, QuerySachDTO, GenericSachReponse, QueryPaginationDTO } from './sach.dto';
import { SachEntity } from '../../entities';
import { TenantAwareContext } from '../database/providers';
import { ChiTietBanHangRepository, SachRepository } from './repositories';


@Injectable()
export class SachService {
  constructor(
    private readonly sachRepo: SachRepository,
    private readonly chiTietBanHang: ChiTietBanHangRepository,
    @Inject(TenantAwareContext) private readonly context: TenantAwareContext,
    ) {}

  async createBook(payload: SachDTO): Promise<SachEntity> {
    const book = await this.sachRepo.save(this.sachRepo.create(payload));

    await this.chiTietBanHang
      .save(this.chiTietBanHang.create({
       nguoiDung: { id: this.context.userId },
       sach: book,
       giaBan: payload.gia,
       soLuong: payload.soLuong
      }));

    return book;
  }

  async getListBookByCategory(payload: QuerySachDTO): Promise<GenericSachReponse> {
    const pageSize = +payload.limit || DEFAULT_LIMIT;
    const pageNumber = +payload.page || DEFAULT_PAGE;
    const res = await this.sachRepo.createQueryBuilder('sach')
      .where('sach.loai.id = :loaiId', { loaiId: payload.loaiId })
      .orderBy('sach.createdAt', 'ASC')
      .limit(pageSize)
      .skip(pageNumber)
      .getManyAndCount();
    const next = pageSize * (pageNumber + 1 ) < res[1] ? pageNumber+ 1: -1;
    return { data: res[0], total: res[1], next };
  }

  async updateBook(payload: SachDTO, id: string): Promise<void> {
    await this.sachRepo.update(id, payload);
  }

  async getListBook(payload: QueryPaginationDTO): Promise<any> {
    const pageSize = +payload.limit || DEFAULT_LIMIT;
    const pageNumber = +payload.page || DEFAULT_PAGE;
    const res = await this.sachRepo.createQueryBuilder('book')
      .orderBy('book.createdAt', 'ASC')
      .limit(+payload.limit || DEFAULT_LIMIT)
      .skip(+payload.page || DEFAULT_PAGE)
      .getManyAndCount();
      const next = pageSize * (pageNumber + 1 ) < res[1] ? pageNumber+ 1: -1
      return { data: res[0], total: res[1], next };
  }

  async deleteBook(id: string): Promise<void> {
    await this.sachRepo.delete(id);
  }
}
