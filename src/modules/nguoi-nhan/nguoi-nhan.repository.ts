import { NguoiNhanEntity } from "../../entities";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(NguoiNhanEntity)
export class NguoiNhanRepository extends Repository<NguoiNhanEntity> {}
