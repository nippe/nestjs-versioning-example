import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'differnet-controllers', version: '1' })
export class VersionOneController {
  @Get('/foo')
  getFoo(): string {
    return 'Foo in version one controller';
  }

  @Get('/bar')
  getBar(): string {
    return 'Bar in version one controller';
  }
}
