import { BaseEntity } from './base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { NguoiDungEntity } from './nguoi-dung.entity';
import { SachEntity } from './sach.entity';

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
}
