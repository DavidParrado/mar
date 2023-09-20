import { Injectable } from '@nestjs/common'
import { CreateCategoryDto } from 'src/category/dto/create-category.dto'
import { UpdateCategoryDto } from 'src/category/dto/update-category.dto'
import { CategoryRepository } from 'src/category/category.repository'
import { Category } from 'src/category/entities/category.entity'

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.create({ ...createCategoryDto })
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find({})
  }
  async findOne(_id: string): Promise<Category> {
    return await this.categoryRepository.findOne({ _id })
  }

  async update(_id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return await this.categoryRepository.findOneAndUpdate({ _id }, updateCategoryDto)
  }

  async remove(_id: string): Promise<boolean> {
    return await this.categoryRepository.deleteOne({ _id })
  }
}
