import { BaseEntity } from './base';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ChiTietPhieuDatHangEntity } from './chi-tiet-phieu-dat-hang.entity';
import { NguoiDungEntity } from './nguoi-dung.entity';
import { NguoiNhanEntity } from './nguoi-nhan.entity';

@Entity()
export class PhieuDatHangEntity extends BaseEntity {
  @Column()
  public ngayMua: Date;

  @Column({ nullable: true })
  public ngayGiao: Date;

  @ManyToOne(() => NguoiNhanEntity, (nguoiNhan) => nguoiNhan.dsPhieuDatHang)
  public nguoiNhan: NguoiNhanEntity;

  @ManyToOne(() => NguoiDungEntity, (nguoiMua) => nguoiMua.dsPhieuDatHang)
  public nguoiMua: NguoiDungEntity;

  @OneToMany(() => ChiTietPhieuDatHangEntity, (ctpdh) => ctpdh.phieuDatHang, { onDelete: 'CASCADE' , eager: true })
  public dsChiTietPhieuDatHang: ChiTietPhieuDatHangEntity[];
}
