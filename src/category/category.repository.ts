import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { EntityRepository } from 'src/database/entity.repository'
import { Category, CategoryDocument } from 'src/category/entities/category.entity'

@Injectable()
export class CategoryRepository extends EntityRepository<CategoryDocument> {
  constructor(@InjectModel(Category.name) categoryModel: Model<CategoryDocument>) {
    super(categoryModel)
  }
}
