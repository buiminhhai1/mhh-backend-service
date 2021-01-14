import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { NguoiDungVaiTro } from '../../entities';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request.vaiTro === NguoiDungVaiTro.quanLy) {
      return true;
    }
    return false;
  }
}
