import { ApiProperty } from '@nestjs/swagger'
import { IsMongoId, IsString } from 'class-validator'

export class CreateCategoryDto {
  @IsString()
  @ApiProperty()
  name: string
  @IsMongoId()
  @ApiProperty()
  image: string
}
