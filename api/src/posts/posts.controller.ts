import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from '@posts/posts.service';
import { Posts } from '@posts/posts.entity';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  findAll(): Promise<Posts[]> {
    return this.postsService.findAll();
  }

  @Post()
  async save(@Body() entitytData: Posts): Promise<any> {
    return this.postsService.save(entitytData);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Posts | null> {
    return this.postsService.findById(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() entityData: Posts,
  ): Promise<any> {
    entityData.id = Number(id);
    return this.postsService.update(entityData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return this.postsService.delete(+id);
  }
}
