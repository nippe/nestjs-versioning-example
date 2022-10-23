import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { MultiVersionSameControllerController } from './multi-version-same-controller/multi-version-same-controller.controller';
import { VersionOneController } from './version-one/version-one.controller';
import { VersionTwoController } from './version-two/version-two.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    HealthController,
    MultiVersionSameControllerController,
    VersionOneController,
    VersionTwoController,
  ],
  providers: [AppService],
})
export class AppModule { }
