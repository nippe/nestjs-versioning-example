import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  findAll(): string {
    return 'Returning all the dogs using defaultVersion attribute';
  }
}
