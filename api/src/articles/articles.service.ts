import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Articles } from '@articles/articles.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Articles)
    private repo: Repository<Articles>,
  ) {}

  async findAll(): Promise<Articles[]> {
    return await this.repo.find();
  }

  async findById(id: number): Promise<Articles | null> {
    return await this.repo.findOneBy({ id: id });
  }

  async save(entity: Articles): Promise<Articles> {
    return await this.repo.save(entity);
  }

  async update(entity: Articles): Promise<UpdateResult> {
    return await this.repo.update(entity.id, entity);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }
}
