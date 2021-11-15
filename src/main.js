import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import SwaggerUI from 'swagger-ui-express'
import Docs from './Docs/index';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(Docs));
  await app.listen(3000);
}
bootstrap();
