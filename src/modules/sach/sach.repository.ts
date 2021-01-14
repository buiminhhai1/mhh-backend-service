import { SachEntity } from '../../entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(SachEntity)
export class SachRepository extends Repository<SachEntity> {}
