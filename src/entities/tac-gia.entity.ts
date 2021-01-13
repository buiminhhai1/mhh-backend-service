import { BaseEntity } from './base';
import { Column, Entity, OneToMany } from 'typeorm';
import { SachEntity } from './sach.entity';

@Entity()
export class TacGiaEntity extends BaseEntity {
  @Column()
  public ten: string;

  @Column()
  public ngaySinh: Date;

  @Column()
  public ngayMat: Date;

  @Column()
  public anh: string;

  @OneToMany(() => SachEntity, (sach) => sach.tacGia, { onDelete: 'CASCADE' })
  public dsSach: SachEntity[];
}
