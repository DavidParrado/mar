import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ThrottlerModule } from '@nestjs/throttler'
import { CategoryModule } from './category/category.module'
import { FileModule } from './file/file.module'
import configuration from 'src/config/configuration'
import { DatabaseModule } from 'src/database/database.module'
import { SerialModule } from './serial/serial.module';
import { ActiveSerialModule } from './active-serial/active-serial.module';
import { ProductModule } from './product/product.module';
import { InvoiceProductModule } from './invoice-product/invoice-product.module';
import { CartProductModule } from './cart-product/cart-product.module';
import { InvoiceModule } from './invoice/invoice.module';
import { AddressModule } from './address/address.module';
import { BannerModule } from './banner/banner.module';
import { StoriesModule } from './stories/stories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configuration]
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20
    }),
    DatabaseModule,
    CategoryModule,
    FileModule,
    SerialModule,
    ActiveSerialModule,
    ProductModule,
    InvoiceProductModule,
    CartProductModule,
    InvoiceModule,
    AddressModule,
    BannerModule,
    StoriesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
