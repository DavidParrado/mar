import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ObjectId, PopulatedDoc, Types } from 'mongoose'
import { Product } from 'src/product/entities/product.entity'

export type SerialDocument = Serial & Document
@Schema({ timestamps: true })
export class Serial {
  createdAt: Date
  updatedAt: Date
  @Prop({ type: Boolean, default: true })
  active: boolean
  @Prop({ type: String, required: false })
  pre: string
  @Prop({ type: String, required: true })
  serial: string
  @Prop({ type: String, required: false })
  lot: string
  @Prop({ type: Number, required: false })
  startNumber: number
  @Prop({ type: Number, required: false })
  finalNumber: number
  @Prop({ type: Number, required: false })
  quantity: number
  @Prop({ type: Number, required: false })
  available: number
  @Prop({ type: Types.ObjectId, required: false, ref: 'Product' })
  product: ObjectId | PopulatedDoc<Product>
}

export const SerialSchema = SchemaFactory.createForClass(Serial)
