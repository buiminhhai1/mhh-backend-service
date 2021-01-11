import * as express from 'express';

export interface CustomHttpRequest extends express.Request {
  tenantId: string;
  userId: string;
  email: string;
}
