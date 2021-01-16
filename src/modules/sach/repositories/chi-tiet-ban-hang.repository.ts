import { ChiTietBanHangEntity } from "../../../entities";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ChiTietBanHangEntity)
export class ChiTietBanHangRepository extends Repository<ChiTietBanHangEntity> {}
