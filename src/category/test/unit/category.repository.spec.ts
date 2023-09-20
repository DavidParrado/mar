import { getModelToken } from '@nestjs/mongoose'
import { Test } from '@nestjs/testing'
import { FilterQuery } from 'mongoose'
import { CategoryRepository } from 'src/category/category.repository'
import { Category } from 'src/category/entities/category.entity'
import { CategoryModel } from 'src/category/__mocks__/category.model'
import { categoryStub } from '../stubs/category.stub'

describe('CategoryRepository', () => {
  let categoryRepository: CategoryRepository

  describe('find operations', () => {
    let categoryModel: CategoryModel
    let categoryFilterQuery: FilterQuery<Category>

    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        providers: [
          CategoryRepository,
          {
            provide: getModelToken(Category.name),
            useClass: CategoryModel
          }
        ]
      }).compile()

      categoryRepository = moduleRef.get<CategoryRepository>(CategoryRepository)
      categoryModel = moduleRef.get<CategoryModel>(getModelToken(Category.name))

      categoryFilterQuery = {
        categoryId: categoryStub().name
      }

      jest.clearAllMocks()
    })

    describe('findOne', () => {
      describe('when findOne is called', () => {
        let category: Category

        beforeEach(async () => {
          jest.spyOn(categoryModel, 'findOne')
          category = await categoryRepository.findOne(categoryFilterQuery)
        })

        it('then it should call the categoryModel', () => {
          expect(categoryModel.findOne).toHaveBeenCalledWith(categoryFilterQuery, { _id: 0, __v: 0 })
        })

        it('then it should return a category', () => {
          expect(category).toEqual(categoryStub())
        })
      })
    })

    describe('find', () => {
      describe('when find is called', () => {
        let category: Category[]

        beforeEach(async () => {
          jest.spyOn(categoryModel, 'find')
          category = await categoryRepository.find(categoryFilterQuery)
        })

        it('then it should call the categoryModel', () => {
          expect(categoryModel.find).toHaveBeenCalledWith({ $and: [categoryFilterQuery, { active: true }] })
        })

        it('then it should return a category', () => {
          expect(category).toEqual([categoryStub()])
        })
      })
    })

    describe('findOneAndUpdate', () => {
      describe('when findOneAndUpdate is called', () => {
        let category: Category

        beforeEach(async () => {
          jest.spyOn(categoryModel, 'findOneAndUpdate')
          category = await categoryRepository.findOneAndUpdate(categoryFilterQuery, categoryStub())
        })

        it('then it should call the categoryModel', () => {
          expect(categoryModel.findOneAndUpdate).toHaveBeenCalledWith(categoryFilterQuery, categoryStub(), { new: true })
        })

        it('then it should return a category', () => {
          expect(category).toEqual(categoryStub())
        })
      })
    })
  })

  describe('create operations', () => {
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        providers: [
          CategoryRepository,
          {
            provide: getModelToken(Category.name),
            useValue: CategoryModel
          }
        ]
      }).compile()

      categoryRepository = moduleRef.get<CategoryRepository>(CategoryRepository)
    })

    describe('create', () => {
      describe('when create is called', () => {
        let category: Category
        let saveSpy: jest.SpyInstance
        let constructorSpy: jest.SpyInstance

        beforeEach(async () => {
          saveSpy = jest.spyOn(CategoryModel.prototype, 'save')
          constructorSpy = jest.spyOn(CategoryModel.prototype, 'constructorSpy')
          category = await categoryRepository.create(categoryStub())
        })

        it('then it should call the categoryModel', () => {
          expect(saveSpy).toHaveBeenCalled()
          expect(constructorSpy).toHaveBeenCalledWith(categoryStub())
        })

        it('then it should return a category', () => {
          expect(category).toEqual(categoryStub())
        })
      })
    })
  })
})
