import { BaseEntity } from './base';
import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { ChiTietBanHangEntity } from './chi-tiet-ban-hang.entity';
import { PhieuDatHangEntity } from './phieu-dat-hang.entity';
import { NguoiNhanEntity } from './nguoi-nhan.entity';

export enum NguoiDungVaiTro {
  quanLy = 'quan_ly',
  khachHang = 'khach_hang',
}

@Entity()
export class NguoiDungEntity extends BaseEntity {
  @Column()
  @Unique(['tenDangNhap'])
  public tenDangNhap: string;

  @Column()
  public matKhau: string;

  @Column()
  public email: string;

  @Column()
  public soDienThoai: string;

  @Column()
  public diaChi: string;

  @Column({
    type: 'enum',
    enum: NguoiDungVaiTro,
    default: NguoiDungVaiTro.khachHang,
  })
  public vaiTro: NguoiDungVaiTro;

  @OneToMany(() => PhieuDatHangEntity, (pdh) => pdh.nguoiMua)
  public dsPhieuDatHang: PhieuDatHangEntity[];

  @OneToMany(() => ChiTietBanHangEntity, (ds) => ds.nguoiDung)
  public dsSachBan: ChiTietBanHangEntity[];

  @OneToMany(() => NguoiNhanEntity, (nnhan) => nnhan.nguoiDung, { onDelete: 'CASCADE'})
  public dsNguoiNhan: NguoiNhanEntity[];
}
