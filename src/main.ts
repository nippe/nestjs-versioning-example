import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['2', '1'],
  });
  // app.setGlobalPrefix('api');   // * Will add a prefixt to path before version /api/v1/.... /api/v2/...
  await app.listen(3030);
}
bootstrap();
