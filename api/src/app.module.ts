import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from '@articles/articles.module';
import { Articles } from '@articles/articles.entity';
import { CollectionArticles } from '@articles/collection/collection-articles.entity';
import { NodeCollectionArticles } from '@articles/collection/node/node-collection-articles.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [Articles, CollectionArticles, NodeCollectionArticles],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
      logger: 'advanced-console',
    }),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
