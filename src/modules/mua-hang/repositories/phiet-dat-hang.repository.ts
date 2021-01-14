import { PhieuDatHangEntity } from "../../../entities";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(PhieuDatHangEntity)
export class PhieuDatHangRepository extends Repository<PhieuDatHangEntity> {}
