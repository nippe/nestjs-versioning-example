import { Controller, Get, Version } from '@nestjs/common';

@Controller({ path: 'differnet-controllers', version: '2' })
export class VersionTwoController {
  @Get('/foo')
  getFoo(): string {
    return 'Foo in version two controller';
  }

  @Get('/bar')
  getBar(): string {
    return 'Bar in version two controller';
  }

  @Get('/baz')
  @Version(['2', '1'])
  getBaz(): string {
    return 'Baz in version two controller';
  }
}
