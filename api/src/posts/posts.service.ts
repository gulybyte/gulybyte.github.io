import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Posts } from '@posts/posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postsRepo: Repository<Posts>,
  ) {}

  async findAll(): Promise<Posts[]> {
    return await this.postsRepo.find();
  }

  async findById(id: number): Promise<Posts | null> {
    return await this.postsRepo.findOneBy({ id: id });
  }

  async save(entity: Posts): Promise<Posts> {
    return await this.postsRepo.save(entity);
  }

  async update(entity: Posts): Promise<UpdateResult> {
    return await this.postsRepo.update(entity.id, entity);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.postsRepo.delete(id);
  }
}
