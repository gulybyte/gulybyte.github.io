import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CollectionArticlesService } from '@articles/collection/collection-articles.service';
import { CollectionArticles } from '@articles/collection/collection-articles.entity';

@Controller('articles-collection')
export class CollectionArticlesController {
  constructor(private service: CollectionArticlesService) {}

  @Get(':id')
  async getById(@Param('id') id: number): Promise<CollectionArticles | null> {
    return this.service.getById(+id);
  }

  @Post()
  async saveCollections(@Body() entitytData: CollectionArticles): Promise<any> {
    return this.service.saveCollections(entitytData);
  }
}
