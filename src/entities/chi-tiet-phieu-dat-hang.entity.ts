import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common';
import { PhieuDatHangEntity } from './phieu-dat-hang.entity';
import { SachEntity } from './sach.entity';

@Entity()
export class ChiTietPhieuDatHangEntity extends BaseEntity {
  @ManyToOne(() => PhieuDatHangEntity, (pdh) => pdh.dsChiTietPhieuDatHang)
  public phieuDatHang: PhieuDatHangEntity;

  @ManyToOne(() => SachEntity, (sach) => sach.dsChiTietDonHang)
  public sach: SachEntity;

  @Column()
  public soLuong: number;

  @Column()
  public donGiaHienHanh: number;
}
