import { updatedCategoryStub } from './../test/stubs/category.stub'
import { Category } from 'src/category/entities/category.entity'
import { MockModel } from 'src/database/test/support/mock.entity'
import { categoryStub } from 'src/category/test/stubs/category.stub'

export class CategoryModel extends MockModel<Category> {
  protected entityStub = categoryStub()
  protected updatedEntityStub = updatedCategoryStub()
}
