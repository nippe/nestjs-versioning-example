import { Controller, Get, Version } from '@nestjs/common';

@Controller('multi-version-same-controller')
export class MultiVersionSameControllerController {
  @Get('/stuff')
  @Version('1')
  getStuff(): string {
    return 'Stuff gotten';
  }

  @Get('/stuff')
  @Version('2')
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
  sameForBothVersionsExplicit(): string {
    return 'This is same for both versions';
  }

  @Get('/only-version-2')
  @Version('2')
  sameForBothVersionsNeutral(): string {
    return 'Only in version 2';
  }
}
