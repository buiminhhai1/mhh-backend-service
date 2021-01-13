import { LoaiSachEntity } from '../../entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(LoaiSachEntity)
export class LoaiSachRepository extends Repository<LoaiSachEntity> {}
