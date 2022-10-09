import { Controller, Get, Version } from '@nestjs/common';

@Controller('cats')
export class CatsControllerV1 {
  @Get()
  @Version('1')
  findAll(): string {
    return 'This action returns all cats for version 1';
  }

  @Get()
  @Version('2')
  findAll2(): string {
    return 'This action returns all cats for version 2';
  }
}
