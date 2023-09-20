import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoiceProductService } from './invoice-product.service';
import { CreateInvoiceProductDto } from './dto/create-invoice-product.dto';
import { UpdateInvoiceProductDto } from './dto/update-invoice-product.dto';

@Controller('invoice-product')
export class InvoiceProductController {
  constructor(private readonly invoiceProductService: InvoiceProductService) {}

  @Post()
  create(@Body() createInvoiceProductDto: CreateInvoiceProductDto) {
    return this.invoiceProductService.create(createInvoiceProductDto);
  }

  @Get()
  findAll() {
    return this.invoiceProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceProductDto: UpdateInvoiceProductDto) {
    return this.invoiceProductService.update(+id, updateInvoiceProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceProductService.remove(+id);
  }
}
