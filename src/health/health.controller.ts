import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  version: VERSION_NEUTRAL,
})
export class HealthController {
  @Get('health')
  healthCheck(): string {
    return JSON.stringify({ status: 'OK' });
  }
}
