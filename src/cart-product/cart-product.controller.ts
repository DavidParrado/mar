import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartProductService } from './cart-product.service';
import { CreateCartProductDto } from './dto/create-cart-product.dto';
import { UpdateCartProductDto } from './dto/update-cart-product.dto';

@Controller('cart-product')
export class CartProductController {
  constructor(private readonly cartProductService: CartProductService) {}

  @Post()
  create(@Body() createCartProductDto: CreateCartProductDto) {
    return this.cartProductService.create(createCartProductDto);
  }

  @Get()
  findAll() {
    return this.cartProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartProductDto: UpdateCartProductDto) {
    return this.cartProductService.update(+id, updateCartProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartProductService.remove(+id);
  }
}
