import * as express from 'express';
import { NguoiDungVaiTro } from '../../entities';

export interface CustomHttpRequest extends express.Request {
  tenantId: string;
  id: string;
  tenDangNhap: string;
  vaiTro: NguoiDungVaiTro;
}
