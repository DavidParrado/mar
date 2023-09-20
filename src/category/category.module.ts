import { Module } from '@nestjs/common'
import { CategoryService } from 'src/category/category.service'
import { CategoryController } from 'src/category/category.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Category, CategorySchema } from 'src/category/entities/category.entity'
import { CategoryRepository } from 'src/category/category.repository'

@Module({
  imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository]
})
export class CategoryModule {}
