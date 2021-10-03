import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  ValidationPipe,
  UsePipes,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';

@Controller('posts')
export default class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() post: UpdatePostDto,
  ) {
    return this.postsService.updatePost(id, post);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deletePost(@Param('id') id: number) {
    return this.postsService.deletePost(id);
  }
}
