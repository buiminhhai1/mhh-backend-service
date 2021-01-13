import { Inject, Injectable, Logger } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { databaseOptions } from '../../../common';
import { getConnectionManager } from 'typeorm';
import { TenantAwareContext } from '../providers';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(TenantAwareContext) private readonly tenantId: string;

  private readonly logger = new Logger(TypeOrmConfigService.name);

  async createTypeOrmOptions(): Promise<any> {
    if (this.tenantId) {
      const isHaveConnection = getConnectionManager().has(this.tenantId);
      this.logger.log(
        isHaveConnection
          ? `-Reuse connection for tenantId: ${this.tenantId}`
          : `-Create new connectdion for tenantId: ${this.tenantId}`,
      );
    }

    return {
      ...databaseOptions,
      name: this.tenantId,
      schema: this.tenantId,
    };
  }
}
