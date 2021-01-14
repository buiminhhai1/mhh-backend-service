import { TacGiaEntity } from "../../entities"
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(TacGiaEntity)
export class TacGiaRepository extends Repository<TacGiaEntity> {}
