import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollectionArticles } from '@articles/collection/collection-articles.entity';

@Injectable()
export class CollectionArticlesService {
  constructor(
    @InjectRepository(CollectionArticles)
    private repo: Repository<CollectionArticles>,
  ) {}

  async saveCollections(
    entity: CollectionArticles,
  ): Promise<CollectionArticles> {
    return await this.repo.save(entity);
  }

  async findAllCollections(): Promise<CollectionArticles[]> {
    return await this.repo.find({
      relations: ['nodesCollectionArticles', 'headNodeCollectionArticles'],
    });
  }
}
