import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SerialService } from './serial.service';
import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';

@Controller('serial')
export class SerialController {
  constructor(private readonly serialService: SerialService) {}

  @Post()
  create(@Body() createSerialDto: CreateSerialDto) {
    return this.serialService.create(createSerialDto);
  }

  @Get()
  findAll() {
    return this.serialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSerialDto: UpdateSerialDto) {
    return this.serialService.update(+id, updateSerialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serialService.remove(+id);
  }
}
