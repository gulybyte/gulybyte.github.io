import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NodeCollectionArticles } from '@articles/collection/node/node-collection-articles.entity';
import { NodeCollectionArticlesService } from '@articles/collection/node/node-collection-articles.service';

@Controller('articles-collection-node')
export class NodeCollectionArticlesController {
  constructor(private service: NodeCollectionArticlesService) {}

  @Post()
  async saveNodeCollections(
    @Body() entitytData: NodeCollectionArticles,
  ): Promise<any> {
    return this.service.saveNodeCollections(entitytData);
  }

  @Get()
  async findAllNodeCollections(): Promise<NodeCollectionArticles[]> {
    return this.service.findAllNodeCollections();
  }

  @Get(':id')
  async findByIdNodeCollections(
    @Param('id') id: number,
  ): Promise<NodeCollectionArticles | null> {
    return this.service.findByIdNodeCollections(+id);
  }

  @Put(':id')
  async updateNodeCollections(
    @Param('id') id: number,
    @Body() entityData: NodeCollectionArticles,
  ): Promise<any> {
    entityData.id = Number(id);
    return this.service.updateNodeCollections(entityData);
  }

  @Delete(':id')
  async deleteNodeCollections(@Param('id') id: number): Promise<any> {
    return this.service.deleteNodeCollections(+id);
  }
}
