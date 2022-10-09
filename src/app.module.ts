import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsControllerV1 } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { HealthController } from './health/health.controller';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsControllerV1, HealthController, DogsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
