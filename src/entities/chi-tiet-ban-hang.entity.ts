import { BaseEntity } from './base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { NguoiDungEntity } from './nguoi-dung.entity';
import { SachEntity } from './sach.entity';

export enum TinhTrangDuyet {
  dangXuLy = 'dang_xu_ly',
  duocDuyet = 'duoc_duyet',
  tuChoi = 'tu_choi'
}

@Entity()
export class ChiTietBanHangEntity extends BaseEntity {
  @ManyToOne(() => SachEntity, (sach) => sach)
  public sach: SachEntity;

  @ManyToOne(() => NguoiDungEntity, (nguoiDung) => nguoiDung.dsSachBan)
  public nguoiDung: NguoiDungEntity;

  @Column()
  public giaBan: number;

  @Column()
  public soLuong: number;

  @Column({
    type: 'enum',
    enum: TinhTrangDuyet,
    default: TinhTrangDuyet.dangXuLy
  })
  public tinhTrang: TinhTrangDuyet;
}
