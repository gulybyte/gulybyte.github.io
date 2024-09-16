import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { NodeCollectionArticles } from '@articles/collection/node/node-collection-articles.entity';

@Injectable()
export class NodeCollectionArticlesService {
  constructor(
    @InjectRepository(NodeCollectionArticles)
    private repo: Repository<NodeCollectionArticles>,
  ) {}

  async saveNodeCollections(
    entity: NodeCollectionArticles,
  ): Promise<NodeCollectionArticles> {
    return await this.repo.save(entity);
  }

  async findAllNodeCollections(): Promise<NodeCollectionArticles[]> {
    return await this.repo.find({
      relations: [
        'parentNode',
        'prevNode',
        'nextNode',
        /* 'article', */
        'collectionArticles',
      ],
    });
  }

  async findByIdNodeCollections(
    id: number,
  ): Promise<NodeCollectionArticles | null> {
    return await this.repo.findOneBy({ id: id });
  }

  async updateNodeCollections(
    entity: NodeCollectionArticles,
  ): Promise<UpdateResult> {
    return await this.repo.update(entity.id, entity);
  }

  async deleteNodeCollections(id: number): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }
}
