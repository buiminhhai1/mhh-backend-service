import { Injectable } from "@nestjs/common";
import { NguoiNhanEntity } from "../../entities";
import { NguoiNhanDTO } from "./nguoi-nhan.dto";
import { NguoiNhanRepository } from "./nguoi-nhan.repository";

@Injectable()
export class NguoiNhanService {
  constructor(private readonly nguoiNhanRepo: NguoiNhanRepository) {}

  async createReciever(payload: NguoiNhanDTO): Promise<NguoiNhanEntity> {
    return await this.nguoiNhanRepo.save(this.nguoiNhanRepo.create(payload));
  }

  async getRecieversByUserId(id: string): Promise<NguoiNhanEntity[]> {
    return await this.nguoiNhanRepo.createQueryBuilder('reciever')
      .where('reciever.nguoiDung.id = :id', { id })
      .getMany();
  }

  async deleteReciver(id: string): Promise<void> {
    await this.nguoiNhanRepo.delete(id);
  }

  async updateReciever(payload: NguoiNhanDTO, id: string): Promise<void> {
    await this.nguoiNhanRepo.update(id, payload);
  }
}
