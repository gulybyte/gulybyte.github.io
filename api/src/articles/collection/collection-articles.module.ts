import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionArticles } from '@articles/collection/collection-articles.entity';
import { NodeCollectionArticles } from '@articles/collection/node/node-collection-articles.entity';
import { CollectionArticlesService } from '@articles/collection/collection-articles.service';
import { CollectionArticlesController } from '@articles/collection/collection-articles.controller';
import { NodeCollectionArticlesService } from '@articles/collection/node/node-collection-articles.service';
import { NodeCollectionArticlesController } from '@articles/collection/node/node-collection-articles.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([CollectionArticles, NodeCollectionArticles]),
  ],
  providers: [CollectionArticlesService, NodeCollectionArticlesService],
  controllers: [CollectionArticlesController, NodeCollectionArticlesController],
})
export class CollectionArticlesModule {}
