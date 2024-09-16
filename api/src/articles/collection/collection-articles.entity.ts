import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { NodeCollectionArticles } from '@articles/collection/node/node-collection-articles.entity';

@Entity()
export class CollectionArticles {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => NodeCollectionArticles, (node) => node.collectionArticles)
  nodesCollectionArticles: NodeCollectionArticles[];

  @OneToOne(() => NodeCollectionArticles)
  @JoinColumn({ name: 'head_node_collection_articles_id' })
  headNodeCollectionArticles: NodeCollectionArticles;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;
}
