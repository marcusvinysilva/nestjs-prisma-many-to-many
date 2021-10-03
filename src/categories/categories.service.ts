import { Injectable } from '@nestjs/common';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export default class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  getAllCategories() {
    return this.prismaService.category.findMany();
  }

  async getCategoryById(id: number) {
    const category = await this.prismaService.category.findUnique({
      where: {
        id,
      },
    });

    return category;
  }

  async createCategory(category: CreateCategoryDto) {
    return this.prismaService.category.create({
      data: category,
    });
  }

  async updateCategory(id: number, category: UpdateCategoryDto) {
    return await this.prismaService.category.update({
      data: {
        ...category,
        id: undefined,
      },
      where: {
        id,
      },
    });
  }

  async deleteCategory(id: number) {
    return this.prismaService.category.delete({
      where: {
        id,
      },
    });
  }
}
