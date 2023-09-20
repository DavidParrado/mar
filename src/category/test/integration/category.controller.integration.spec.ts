import { Test } from '@nestjs/testing'
import mongoose, { Connection } from 'mongoose'

import { DatabaseService } from 'src/database/database.service'
import { categoryStub, updatedCategoryStub } from 'src/category/test/stubs/category.stub'
import * as request from 'supertest'
import { AppModule } from 'src/app.module'
import { CreateCategoryDto } from 'src/category/dto/create-category.dto'
import { UpdateCategoryDto } from 'src/category/dto/update-category.dto'

describe('CategoryController', () => {
  // Define the variables for database connection, HTTP server and application
  let dbConnection: Connection
  let httpServer: any
  let app: any

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    // Create a Nest application from the testing module
    app = moduleRef.createNestApplication()
    // Retrieve the database connection from the testing module
    dbConnection = moduleRef.get<DatabaseService>(DatabaseService).getDbHandle()
    // Initialize the application
    await app.init()
    // Get the HTTP server of the application
    httpServer = app.getHttpServer()
  })

  afterAll(async () => {
    // Delete all documents in the 'categories' collection of the database
    await dbConnection.collection('categories').deleteMany({})
    // Close the Nest application after tests to free up system resources
    await app.close()
  })

  beforeEach(async () => {
    // Delete all documents in the 'categories' collection of the database
    await dbConnection.collection('categories').deleteMany({})
  })

  // Test block for the GET /category route
  describe('/category (Get)', () => {
    // Test case: Should return an array of categories
    it('should return an array of categories', async () => {
      // Arrange: Insert a category in the database
      await dbConnection.collection('categories').insertOne({ ...categoryStub(), __v: 0 })

      // Act: Make a GET request to the '/category' endpoint
      const response = await request(httpServer).get('/category')

      // Assert: Expect the response status code to be 200 (OK)
      expect(response.status).toBe(200)

      // Assert: Expect the response body to match the inserted category
      // Here we wrap categoryStub in an array because the API is expected to return an array of categories
      expect(response.body).toMatchObject([categoryStub()])
    })
  })

  // Test block for the POST /category route
  describe('/category (Post)', () => {
    // Test case: Should create a category
    it('should create a category', async () => {
      // Arrange: Create a DTO for a new category using the stub data
      const createCategoryDto: CreateCategoryDto = {
        name: categoryStub().name,
        image: categoryStub().image
      }

      // Act: Make a POST request to the /category route, providing the new category data
      const response = await request(httpServer).post('/category').send(createCategoryDto)

      // Assert: Expect the response status code to be 201 (resource created)
      expect(response.status).toBe(201)

      // Assert: Expect the response body to match the data we sent
      // Note: This assumes that the API returns the created object. If it doesn't,
      // you might need to modify this test accordingly.
      expect(response.body).toMatchObject(createCategoryDto)
    })
  })

  // Test block for the PATCH /category route
  describe('/category (Patch)', () => {
    // Test case: Should create a category
    it('should update a category', async () => {
      // Arrange: Create a DTO for a new category using the stub data
      const updateCategoryDto: UpdateCategoryDto = {
        name: updatedCategoryStub().name
      }

      // Act: Make a PATCH request to the /category route, providing the new category data
      const response = await request(httpServer).post('/category').send(updateCategoryDto)

      // Assert: Expect the response status code to be 201 (resource updated)
      expect(response.status).toBe(201)

      // Assert: Expect the response body to match the data we sent
      // Note: This assumes that the API returns the updated object. If it doesn't,
      // you might need to modify this test accordingly.
      expect(response.body).toMatchObject(updateCategoryDto)
    })
  })
  describe('/category (Delete)', () => {
    // Test case: Should delete a category
    it('should delete a category', async () => {
      // Act: Make a DELETE request to the /category route, providing the category ID
      const categoryId = new mongoose.Types.ObjectId().toString()
      const response = await request(httpServer).delete('/category/' + categoryId)

      // Assert: Expect the response status code to be 200 (success)
      expect(response.status).toBe(200)

      // Assert: Expect the response body to be an empty object or null
      expect(response.body).toEqual({})
    })
  })
})
