import { Logger, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { CustomHttpRequest } from '../../../common';

export const TenantAwareContext = 'TOKEN__TenantAwareContext';
const logger = new Logger('TenantAwareContextProvider');

export const TenantAwareContextProvider = {
  provide: TenantAwareContext,
  useFactory: async (httpRequest: CustomHttpRequest) => {
    // Handle request from HTTP
    if (httpRequest?.tenantId) {
      logger.log(` - Context request from HTTP: TenantId: ${httpRequest.tenantId}`);
      return httpRequest.tenantId;
    }

    logger.log(' - Context request from HTTP without tenantID');
    return null;
  },
  inject: [REQUEST],
  scope: Scope.REQUEST,
};
