import { Injectable } from "@nestjs/common";
import { TacGiaEntity } from "../../entities";
import { TacGiaDTO } from "./tac-gia.dto";
import { TacGiaRepository } from "./tac-gia.repository";

@Injectable()
export class TacGiaService {
  constructor(private readonly tacGiaRepo: TacGiaRepository) {}

  async createAuth(payload: TacGiaDTO): Promise<TacGiaEntity> {
    return await this.tacGiaRepo.save(this.tacGiaRepo.create(payload));
  }

  async updateAuth(payload: TacGiaDTO, id: string): Promise<void> {
    await this.tacGiaRepo.update(id, payload);
  }

  async getAllAuths(): Promise<TacGiaEntity[]> {
    return this.tacGiaRepo.createQueryBuilder('auth').getMany();
  }

  async getDetailAuth(id: string): Promise<TacGiaEntity> {
    return this.tacGiaRepo.findOneOrFail(id);
  }
}
