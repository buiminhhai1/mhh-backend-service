import { BaseEntity } from './base';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { PhieuDatHangEntity } from './phieu-dat-hang.entity';
import { NguoiDungEntity } from './nguoi-dung.entity';

@Entity()
export class NguoiNhanEntity extends BaseEntity {
  @Column()
  public ten: string;

  @Column()
  public diaChi: string;

  @Column()
  public soDienThoai: string;

  @OneToMany(() => PhieuDatHangEntity, (pdh) => pdh.nguoiNhan, { onDelete: 'CASCADE' })
  public dsPhieuDatHang: PhieuDatHangEntity[];

  @ManyToOne(() => NguoiDungEntity, (user) => user.dsNguoiNhan)
  public nguoiDung: NguoiDungEntity;
}
