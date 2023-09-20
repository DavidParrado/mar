import { Module } from '@nestjs/common';
import { InvoiceProductService } from './invoice-product.service';
import { InvoiceProductController } from './invoice-product.controller';

@Module({
  controllers: [InvoiceProductController],
  providers: [InvoiceProductService]
})
export class InvoiceProductModule {}
