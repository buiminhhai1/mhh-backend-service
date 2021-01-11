import { BaseEntity } from 'src/common';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ChiTietBanHangEntity } from './chi-tiet-ban-hang.entity';
import { ChiTietPhieuDatHangEntity } from './chi-tiet-phieu-dat-hang.entity';
import { LoaiSachEntity } from './loai-sach.entity';
import { TacGiaEntity } from './tac-gia.entity';

@Entity()
export class SachEntity extends BaseEntity {
  @Column()
  public ten: string;

  @Column()
  public moTa: string;

  @Column()
  public hinhAnh: string;

  @Column()
  public tinhTrangHang: boolean;

  @Column()
  public gia: number;

  @Column()
  public nhaXuatBan: string;

  @ManyToOne(() => LoaiSachEntity, (loai) => loai.dsSach, { onDelete: 'CASCADE' })
  public loai: LoaiSachEntity;

  @ManyToOne(() => TacGiaEntity, (tacGia) => tacGia.dsSach)
  public tacGia: TacGiaEntity;

  @OneToMany(() => ChiTietPhieuDatHangEntity, (ctdh) => ctdh.sach, { onDelete: 'CASCADE' })
  public dsChiTietDonHang: ChiTietPhieuDatHangEntity[];

  @OneToMany(() => ChiTietBanHangEntity, (ds) => ds.sach)
  public dsChiTietBanHang: ChiTietBanHangEntity;
}
