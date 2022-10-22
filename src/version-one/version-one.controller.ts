import { Controller, Get, Version } from '@nestjs/common';

@Controller({ path: 'differnet-controllers', version: '1' })
export class VersionOneController {
  @Get('/foo')
  getFoo(): string {
    return 'Foo in version one controller';
  }
}
