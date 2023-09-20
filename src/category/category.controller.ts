import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { CategoryService } from 'src/category/category.service'
import { CreateCategoryDto } from 'src/category/dto/create-category.dto'
import { UpdateCategoryDto } from 'src/category/dto/update-category.dto'
@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Category created successfully' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto)
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Retrieved all categories successfully' })
  findAll() {
    return this.categoryService.findAll()
  }

  @Get(':_id')
  @ApiResponse({ status: 200, description: 'Retrieved a category successfully' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  findOne(@Param('_id') _id: string) {
    return this.categoryService.findOne(_id)
  }

  @Patch(':_id')
  @ApiResponse({ status: 200, description: 'Category updated successfully' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  update(@Param('_id') _id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(_id, updateCategoryDto)
  }

  @Delete(':_id')
  @ApiResponse({ status: 200, description: 'Category deleted successfully' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  remove(@Param('_id') _id: string) {
    return this.categoryService.remove(_id)
  }
}
