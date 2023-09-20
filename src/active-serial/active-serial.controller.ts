import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActiveSerialService } from './active-serial.service';
import { CreateActiveSerialDto } from './dto/create-active-serial.dto';
import { UpdateActiveSerialDto } from './dto/update-active-serial.dto';

@Controller('active-serial')
export class ActiveSerialController {
  constructor(private readonly activeSerialService: ActiveSerialService) {}

  @Post()
  create(@Body() createActiveSerialDto: CreateActiveSerialDto) {
    return this.activeSerialService.create(createActiveSerialDto);
  }

  @Get()
  findAll() {
    return this.activeSerialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activeSerialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActiveSerialDto: UpdateActiveSerialDto) {
    return this.activeSerialService.update(+id, updateActiveSerialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activeSerialService.remove(+id);
  }
}
