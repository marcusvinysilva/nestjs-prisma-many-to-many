import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, PostsModule, CategoriesModule],
})
export class AppModule {}
