import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPost(post: CreatePostDto) {
    const categories = post.categories?.map((category) => ({
      id: category,
    }));

    return this.prismaService.post.create({
      data: {
        title: post.title,
        content: post.content,
        categories: {
          connect: categories,
        },
      },
      include: {
        categories: true,
      },
    });
  }

  async updatePost(id: number, post: UpdatePostDto) {
    return await this.prismaService.post.update({
      data: {
        ...post,
        id: undefined,
      },
      where: {
        id,
      },
    });
  }

  async deletePost(id: number) {
    return this.prismaService.post.delete({
      where: {
        id,
      },
    });
  }
}
