import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PostsDto } from '@dto/posts-dto';
import { PostDto } from '@dto/post-dto';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPosts(): { posts: PostsDto[] } {
    console.log('posts/');
    return this.appService.getPosts();
  }

  @Get(':id')
  getPost(@Param() params: any): { posts: PostDto | undefined } {
    console.log('posts/${params.id}');
    return this.appService.getPost(params.id);
  }
}
