import { DEFAULT_LIMIT, DEFAULT_PAGE } from './../../common/constants/pagination';
import { omit } from 'lodash';
import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { NguoiDungRepository } from './nguoi-dung.repository';
import { CredentialDTO, GenericNguoiDungResponsive, LoginDTO, PaginationAuthDTO } from '../auth/auth.dto';
import { NguoiDungEntity } from '../../entities';
import { TenantAwareContext } from '../database/providers';

@Injectable()
export class NguoiDungService {
  constructor(
    private readonly nguoiDungRepo: NguoiDungRepository,
    @Inject(TenantAwareContext) private readonly context: TenantAwareContext
  ) {}

  async register(payload: CredentialDTO): Promise<Partial<NguoiDungEntity>> {
    const user = await this.nguoiDungRepo
      .createQueryBuilder('user')
      .where('user.tenDangNhap = :username', { username: payload.tenDangNhap })
      .getOne();
    if (user) {
      throw new ConflictException(`ten dang nhap ${payload.tenDangNhap} da ton tai`);
    }
    const matKhau = await bcrypt.hash(payload.matKhau, 10);
    const newUser = await this.nguoiDungRepo.save(this.nguoiDungRepo.create({ ...payload, matKhau }));
    return omit(newUser, 'matKhau');
  }

  async veriffyUser(payload: LoginDTO): Promise<Partial<NguoiDungEntity>> {
    const user = await this.nguoiDungRepo
      .createQueryBuilder('user')
      .where('user.tenDangNhap = :username', { username: payload.tenDangNhap })
      .getOne();
    if (!user) {
      throw new UnauthorizedException(`nguoi dung: ${payload.tenDangNhap} khong ton tai`);
    }

    const isLogin = await bcrypt.compare(payload.matKhau, user.matKhau);
    if (isLogin) {
      return omit(user, 'matKhau');
    }
    return null
  }

  async getUsers(payload: PaginationAuthDTO): Promise<GenericNguoiDungResponsive> {
    const pageSize = +payload.limit || DEFAULT_LIMIT;
    const pageNumber = +payload.page || DEFAULT_PAGE;
    const res = await this.nguoiDungRepo.createQueryBuilder('user')
      .orderBy('user.createdAt', 'ASC')
      .limit(pageSize)
      .skip(pageNumber)
      .getManyAndCount();
      const data = res[0].map(item => omit(item, 'matKhau'));
      const next = pageSize * (pageNumber + 1 ) < res[1] ? pageNumber+ 1: -1;
      return { data, total: res[1], next }
  }

  async getUserById(id: string): Promise<Partial<NguoiDungEntity>> {
    return this.nguoiDungRepo.findOneOrFail(id);
  }

  async changePassword(updatePassword: string): Promise<void> {
    const user = await this.getUserById(this.context.userId);
    user.matKhau = await bcrypt.hash(updatePassword, 10);
    await this.nguoiDungRepo.save(user);
  }
}
