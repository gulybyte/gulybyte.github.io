import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from '@posts/posts.service';
import { PostsController } from '@posts/posts.controller';
import { Posts } from '@posts/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
