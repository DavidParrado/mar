import { categoryStub, updatedCategoryStub } from 'src/category/test/stubs/category.stub'

export const CategoryService = jest.fn().mockReturnValue({
  findAll: jest.fn().mockResolvedValue([categoryStub()]),
  findOne: jest.fn().mockResolvedValue(categoryStub()),
  create: jest.fn().mockResolvedValue(categoryStub()),
  update: jest.fn().mockResolvedValue(updatedCategoryStub()),
  remove: jest.fn().mockResolvedValue(true)
})
