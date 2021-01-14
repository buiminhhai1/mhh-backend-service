import { Injectable } from "@nestjs/common";
import { NguoiNhanEntity } from "../../entities";
import { NguoiNhanDTO } from "./nguoi-nhan.dto";
import { NguoiNhanRepository } from "./nguoi-nhan.repository";

@Injectable()
export class NguoiNhanService {
  constructor(private readonly nguoiNhanRepo: NguoiNhanRepository) {}

  async createReciever(payload: NguoiNhanDTO): Promise<NguoiNhanEntity> {
    return this.nguoiNhanRepo.save(this.nguoiNhanRepo.create(payload));
  }

  async getRecieversByUserId(id: string): Promise<NguoiNhanEntity[]> {
    return this.nguoiNhanRepo.createQueryBuilder('reciever')
      .where('reciver.nguoiDung.id = :id', { id })
      .getMany();
  }

  async deleteReciver(id: string): Promise<void> {
    await this.nguoiNhanRepo.delete(id);
  }

  async updateReciever(payload: NguoiNhanDTO, id: string): Promise<void> {
    await this.nguoiNhanRepo.update(id, payload);
  }
}
