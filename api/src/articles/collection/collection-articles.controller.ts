import { Body, Controller, Get, Post } from '@nestjs/common';
import { CollectionArticlesService } from '@articles/collection/collection-articles.service';
import { CollectionArticles } from '@articles/collection/collection-articles.entity';

@Controller('articles-collection')
export class CollectionArticlesController {
  constructor(private service: CollectionArticlesService) {}
  @Get()
  async getAllCollections(): Promise<CollectionArticles[]> {
    return this.service.findAllCollections();
  }

  @Post()
  async saveCollections(@Body() entitytData: CollectionArticles): Promise<any> {
    return this.service.saveCollections(entitytData);
  }
}
