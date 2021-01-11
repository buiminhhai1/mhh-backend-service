import { BaseEntity } from 'src/common';
import { Column, Entity, OneToMany } from 'typeorm';
import { SachEntity } from './sach.entity';

@Entity()
export class LoaiSachEntity extends BaseEntity {
  @Column()
  public ten: string;

  @OneToMany(() => SachEntity, (sach) => sach.loai)
  public dsSach: SachEntity[];
}
