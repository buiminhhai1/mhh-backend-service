import { ForbiddenException, Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NguoiDungVaiTro } from "../../entities";
import { CustomHttpRequest } from "../interfaces";

@Injectable()
export class AdminContextMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AdminContextMiddleware.name);

  use(req: CustomHttpRequest, res: Response, next: () => void) {
    if (req.vaiTro !== NguoiDungVaiTro.quanLy) {
      throw new ForbiddenException('Access defined');
    }
    this.logger.log('- Middle check admin passing...');
    next();
    return;
  }
}
