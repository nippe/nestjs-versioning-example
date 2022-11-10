import { Controller, Get, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('multi-version-same-controller')
export class MultiVersionSameControllerController {
  @Get('/stuff')
  @Version('1')
  getStuff(): string {
    return 'Stuff gotten';
  }

  @Get('/stuff')
  @Version('2')
  @ApiTags('Version 1')
  getStuffV2(): [string] {
    return ['Verjion 2 stuff gotten'];
  }

  // Same for both versions due to main.ts having
  // defaultVersion: ['2', '1'],
  @Get('/same-implicit')
  sameForBothVersions(): string {
    return 'This is same for both versions';
  }

  @Get('/same-explicit')
  @Version(['2', '1'])
  @ApiTags('Version 1')
  @ApiTags('Version 2') // ! Becomes super weird, the /v1 and /v2 endus up under both version tags/headings
  sameForBothVersionsExplicit(): string {
    return 'This is same for both versions';
  }

  @Get('/only-version-2')
  @Version('2')
  sameForBothVersionsNeutral(): string {
    return 'Only in version 2';
  }
}
