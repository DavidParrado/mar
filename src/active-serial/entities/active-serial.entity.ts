import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ObjectId, PopulatedDoc, Types } from 'mongoose'
import { Product } from 'src/product/entities/product.entity'
import { Serial } from 'src/serial/entities/serial.entity'

export type ActiveSerialDocument = ActiveSerial & Document
@Schema({ timestamps: true })
export class ActiveSerial {
  _id: ObjectId
  createdAt: Date
  updatedAt: Date
  @Prop({ type: Boolean, default: true })
  active: boolean
  @Prop({ type: Types.ObjectId, required: false, ref: 'Serial' })
  activatedSerial: ObjectId | PopulatedDoc<Serial>
  @Prop({ type: Types.ObjectId, required: false, ref: 'User' }) // TODO: Change Product for User
  activatedBy: ObjectId | PopulatedDoc<Product>
  @Prop({ type: String, required: true })
  serial: string
  @Prop({ type: Date, required: true })
  orderDate: Date
  @Prop({ type: String, required: true })
  paymentReference: string
  @Prop({ type: String, required: true })
  paymentStatus: string
}

export const ActiveSerialSchema = SchemaFactory.createForClass(ActiveSerial)
