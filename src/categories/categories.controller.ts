import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  ValidationPipe,
  UsePipes,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import CategoriesService from './categories.service';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';

@Controller('categories')
export default class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @UsePipes(ValidationPipe)
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  getCategoryById(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.getCategoryById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createCategory(@Body() category: CreateCategoryDto) {
    return this.categoriesService.createCategory(category);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() category: UpdateCategoryDto,
  ) {
    return this.categoriesService.updateCategory(id, category);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.deleteCategory(id);
  }
}
