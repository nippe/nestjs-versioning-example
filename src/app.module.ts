import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsControllerV1 } from './cats/cats.controller';
import { HealthController } from './health/health.controller';
import { DogsController } from './dogs/dogs.controller';
import { MultiVersionSameControllerController } from './multi-version-same-controller/multi-version-same-controller.controller';
import { VersionOneController } from './version-one/version-one.controller';
import { VersionTwoController } from './version-two/version-two.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CatsControllerV1,
    HealthController,
    DogsController,
    MultiVersionSameControllerController,
    VersionOneController,
    VersionTwoController,
  ],
  providers: [AppService],
})
export class AppModule {}
