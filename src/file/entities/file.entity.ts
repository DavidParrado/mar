import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
@Schema({ timestamps: true })
export class File extends Document {
  @Prop({ type: Boolean, default: true })
  active: boolean
}

export const FileSchema = SchemaFactory.createForClass(File)
