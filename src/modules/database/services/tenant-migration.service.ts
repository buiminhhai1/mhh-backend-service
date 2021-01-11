import { Injectable, Logger } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class TenantMigrationService {
  constructor(private readonly databaseConnection: Connection) {
    console.log('database connecdtion', this.databaseConnection);
  }
  private readonly logger = new Logger(TenantMigrationService.name);

  async onNewTenant(tenantId: string) {
    this.logger.log('onNewTenant');
    this.logger.log(tenantId);
  }
}
