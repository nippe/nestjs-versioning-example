import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['2', '1'],
  });
  // app.setGlobalPrefix('api');   // * Will add a prefixt to path before version /api/v1/.... /api/v2/...

  // swagger
  const specConfig = new DocumentBuilder()
    .setTitle('Versioning Sample App')
    .setDescription('A sample app showing off some HTTP versioning concepts')
    .build();
  const openApiDoc = SwaggerModule.createDocument(app, specConfig);
  SwaggerModule.setup('api', app, openApiDoc);
  // swagger end
  await app.listen(3030);
}
bootstrap();
