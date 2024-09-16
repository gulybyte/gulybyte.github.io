import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticlesService } from '@articles/articles.service';
import { Articles } from '@articles/articles.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Get()
  findAll(): Promise<Articles[]> {
    return this.service.findAll();
  }

  @Post()
  async save(@Body() entitytData: Articles): Promise<any> {
    return this.service.save(entitytData);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Articles | null> {
    return this.service.findById(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() entityData: Articles,
  ): Promise<any> {
    entityData.id = Number(id);
    return this.service.update(entityData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return this.service.delete(+id);
  }
}
