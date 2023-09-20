import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document, ObjectId, PopulatedDoc, Types } from 'mongoose'
import { File } from 'src/file/entities/file.entity'

export type CategoryDocument = Category & Document

@Schema({ timestamps: true })
export class Category {
  @ApiProperty()
  createdAt?: Date
  @ApiProperty()
  updatedAt?: Date
  @ApiProperty()
  @Prop({ type: Boolean, default: true })
  active?: boolean
  @ApiProperty()
  @Prop({ type: String, required: true })
  name: string
  @ApiProperty()
  @Prop({ type: Types.ObjectId, required: false })
  image: ObjectId | PopulatedDoc<File>
}

export const CategorySchema = SchemaFactory.createForClass(Category)
