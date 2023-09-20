import { Module } from '@nestjs/common';
import { ActiveSerialService } from './active-serial.service';
import { ActiveSerialController } from './active-serial.controller';

@Module({
  controllers: [ActiveSerialController],
  providers: [ActiveSerialService]
})
export class ActiveSerialModule {}
