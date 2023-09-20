import { PartialType } from '@nestjs/swagger';
import { CreateActiveSerialDto } from './create-active-serial.dto';

export class UpdateActiveSerialDto extends PartialType(CreateActiveSerialDto) {}
