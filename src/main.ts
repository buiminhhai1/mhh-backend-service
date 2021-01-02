import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

import * as helmet from 'helmet';
import { AppModule } from './app.module';
import {
  serverName,
  serverPort,
  serverVersion,
  swaggerConfiguration,
} from './common';

const logger = new Logger(`${serverName}@${serverVersion}`);

const bootstrapApplication = async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.use(helmet());

  const document = SwaggerModule.createDocument(app, swaggerConfiguration);
  SwaggerModule.setup('/swagger', app, document);

  await app.listenAsync(serverPort);
  logger.log(
    `HTTP server is up & running on http://localhost:${serverPort}/swagger`,
  );

  return app;
};

export default bootstrapApplication().catch((err) => {
  console.error(err);
  process.exit(1);
});
