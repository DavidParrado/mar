import { Category } from 'src/category/entities/category.entity'

export const categoryStub = (): Category => {
  return {
    name: 'Test Category',
    image: '6473ec2ec0fd3dfb13b58fe0',
    active: true
  }
}
export const updatedCategoryStub = (): Category => {
  return {
    name: 'Test Updated Category',
    image: '6473ec2ec0fd3dfb13b58fe0',
    active: true
  }
}

export const deletedCategoryStub = (): Category => {
  return {
    name: 'Test Updated Category',
    image: '6473ec2ec0fd3dfb13b58fe0',
    active: true
  }
}
