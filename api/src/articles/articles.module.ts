import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesService } from '@articles/articles.service';
import { ArticlesController } from '@articles/articles.controller';
import { Articles } from '@articles/articles.entity';
import { CollectionArticles } from '@articles/collection-articles.entity';
import { NodeCollectionArticles } from '@articles/node-collection-articles.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Articles,
      CollectionArticles,
      NodeCollectionArticles,
    ]),
  ],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
