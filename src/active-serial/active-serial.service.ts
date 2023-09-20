import { Injectable } from '@nestjs/common';
import { CreateActiveSerialDto } from './dto/create-active-serial.dto';
import { UpdateActiveSerialDto } from './dto/update-active-serial.dto';

@Injectable()
export class ActiveSerialService {
  create(createActiveSerialDto: CreateActiveSerialDto) {
    return 'This action adds a new activeSerial';
  }

  findAll() {
    return `This action returns all activeSerial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activeSerial`;
  }

  update(id: number, updateActiveSerialDto: UpdateActiveSerialDto) {
    return `This action updates a #${id} activeSerial`;
  }

  remove(id: number) {
    return `This action removes a #${id} activeSerial`;
  }
}
