import { Injectable, Logger, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/modules/auth';
import { devTenant, isProduction } from '../constants';
import { CustomHttpRequest } from '../interfaces';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  private readonly logger = new Logger(AuthMiddleware.name);

  async use(req: CustomHttpRequest, res: Response, next: () => void) {
    // Setup default tenant for dev local
    if (!isProduction) {
      req.tenantId = devTenant;
      req.userId = devTenant;
      next();
      return;
    }

    const authorizationHeader = <string>req.headers['x-access-token'] || '';
    if (authorizationHeader) {
      try {
        this.logger.log('- Got header x-access-token');
        this.logger.log(authorizationHeader);
        const payload = await this.authService.decode(authorizationHeader);
        req.tenantId = payload.tenantId;
        req.userId = payload.userId;
        req.email = payload.email;
      } catch (e) {
        this.logger.error(JSON.stringify(e, null, 2));
      }
    } else {
      throw new UnauthorizedException('Missing x-access-token in header');
    }
    next();
  }
}
