import { Injectable } from "@nestjs/common";
import { PhieuDatHangEntity } from "../../../entities";
import { omit } from 'lodash';
import { PhieuDatHangRepository } from "../repositories/phiet-dat-hang.repository";
import { PhieuDatHangDTO, ChiTietPhieuDatHangDTO, RecieveDateDTO } from "../dto";
import { ChiTietPhieuDatHangRepository } from "../repositories/chi-tiet-phieu-dat-hang.repository";

@Injectable()
export class PhieuDatHangService {
  constructor(
    private readonly pdhRepo: PhieuDatHangRepository,
    private readonly chiTietRepo: ChiTietPhieuDatHangRepository) {}

  async createOrder(payload: PhieuDatHangDTO): Promise<PhieuDatHangEntity> {
    const order = await this.pdhRepo.save(this.pdhRepo.create(omit(payload, 'dsChiTietPhieuDatHang')));
    const jobs = payload.dsChiTietPhieuDatHang.map(item => {
      this.createOrderItem(item, order.id);
    })
    await Promise.all(jobs);
    return order;
  }

  async createOrderItem(payload: ChiTietPhieuDatHangDTO, orderId: string): Promise<void> {
    await this.chiTietRepo.save(this.chiTietRepo.create({ ...payload, phieuDatHang: { id: orderId}}));
  }

  async updateRecieveDate(payload: RecieveDateDTO, id: string): Promise<void> {
    const order = await this.pdhRepo.findOneOrFail({ id });
    order.ngayGiao = payload.ngayGiao;
    await this.pdhRepo.save(order);
  }

  async deleteOrder(id: string): Promise<void> {
    await this.pdhRepo.delete(id);
  }

  async getOrderByUserId(id: string): Promise<PhieuDatHangEntity[]> {
    return await this.pdhRepo.find({ where: { nguoiMua : { id }},
    });
  }
}
