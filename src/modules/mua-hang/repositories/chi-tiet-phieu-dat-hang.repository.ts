import { ChiTietPhieuDatHangEntity } from "../../../entities";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ChiTietPhieuDatHangEntity)
export class ChiTietPhieuDatHangRepository extends Repository<ChiTietPhieuDatHangEntity> {

}
