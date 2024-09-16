import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesService } from '@articles/articles.service';
import { ArticlesController } from '@articles/articles.controller';
import { Articles } from '@articles/articles.entity';
import { CollectionArticlesModule } from '@articles/collection/collection-articles.module';

@Module({
  imports: [TypeOrmModule.forFeature([Articles]), CollectionArticlesModule],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
