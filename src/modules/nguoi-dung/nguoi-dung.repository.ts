import { NguoiDungEntity } from '../../entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(NguoiDungEntity)
export class NguoiDungRepository extends Repository<NguoiDungEntity> {}
