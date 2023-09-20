import { Injectable } from '@nestjs/common';
import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';

@Injectable()
export class SerialService {
  create(createSerialDto: CreateSerialDto) {
    return 'This action adds a new serial';
  }

  findAll() {
    return `This action returns all serial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serial`;
  }

  update(id: number, updateSerialDto: UpdateSerialDto) {
    return `This action updates a #${id} serial`;
  }

  remove(id: number) {
    return `This action removes a #${id} serial`;
  }
}
