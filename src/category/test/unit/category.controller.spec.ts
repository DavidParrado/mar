// Importing necessary dependencies and modules
import { Test } from '@nestjs/testing'
import mongoose from 'mongoose'
import { CategoryController } from 'src/category/category.controller'
import { CategoryService } from 'src/category/category.service'
import { CreateCategoryDto } from 'src/category/dto/create-category.dto'
import { UpdateCategoryDto } from 'src/category/dto/update-category.dto'
import { Category } from 'src/category/entities/category.entity'
import { categoryStub, updatedCategoryStub } from 'src/category/test/stubs/category.stub'

// Mock the CategoryService
jest.mock('src/category/category.service')

// Define the test suite for CategoryController
describe('CategoryController', () => {
  // Declare the variables that will be used across the test suite
  let categoryController: CategoryController
  let categoryService: CategoryService

  // Before each test, create a Nest testing module and fetch the controller and service
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [CategoryController],
      providers: [CategoryService]
    }).compile()

    categoryController = moduleRef.get<CategoryController>(CategoryController)
    categoryService = moduleRef.get<CategoryService>(CategoryService)

    // Clear all mock instances and calls to constructor and all methods:
    jest.clearAllMocks()
  })

  // Test cases for the 'findAll' method
  describe('findAll (get categories)', () => {
    describe('when findAll is called', () => {
      let categories: Category[]

      beforeEach(async () => {
        categories = await categoryController.findAll()
      })

      it('should call categoryService.findAll', () => {
        expect(categoryService.findAll).toHaveBeenCalled()
      })

      it('should return a list of categories', () => {
        expect(categories).toEqual([categoryStub()])
      })
    })
  })

  // Test cases for the 'findOne' method
  describe('findOne (get category)', () => {
    describe('when findOne is called', () => {
      let category: Category
      let _id: string
      beforeEach(async () => {
        _id = new mongoose.Types.ObjectId().toString()
        category = await categoryController.findOne(_id)
      })

      it('should call categoryService.findOne', () => {
        expect(categoryService.findOne).toHaveBeenCalled()
      })

      it('should return a list of category', () => {
        expect(category).toEqual(categoryStub())
      })
    })
  })
  // Test cases for the 'create' method
  describe('create (create category)', () => {
    describe('when create is called', () => {
      let category: Category
      let createCategoryDto: CreateCategoryDto

      beforeEach(async () => {
        createCategoryDto = {
          name: categoryStub().name,
          image: categoryStub().image
        }
        category = await categoryController.create(createCategoryDto)
      })

      test('should call categoryService.create with correct parameters', () => {
        expect(categoryService.create).toHaveBeenCalledWith(createCategoryDto)
      })

      test('should return a category', () => {
        expect(category).toEqual(categoryStub())
      })
    })
  })
  // Test cases for the 'update' method
  describe('update (update category)', () => {
    describe('when update is called', () => {
      let category: Category
      let updateCategoryDto: UpdateCategoryDto
      let _id: string
      beforeEach(async () => {
        updateCategoryDto = {
          name: updatedCategoryStub().name
        }
        _id = new mongoose.Types.ObjectId().toString()
        category = await categoryController.update(_id, updateCategoryDto)
      })

      test('should call categoryService.update with correct parameters', () => {
        expect(categoryService.update).toHaveBeenCalledWith(_id, updateCategoryDto)
      })

      test('should return a category', () => {
        expect(category).toEqual(updatedCategoryStub())
      })
    })
  })
  // Test cases for the 'remove' method
  describe('remove (get category)', () => {
    describe('when remove is called', () => {
      let deleted: boolean
      let _id: string
      beforeEach(async () => {
        _id = new mongoose.Types.ObjectId().toString()
        deleted = await categoryController.remove(_id)
      })

      it('should call categoryService.remove', () => {
        expect(categoryService.remove).toHaveBeenCalled()
      })

      it('should return a list of category', () => {
        expect(deleted).toEqual(true)
      })
    })
  })
})
