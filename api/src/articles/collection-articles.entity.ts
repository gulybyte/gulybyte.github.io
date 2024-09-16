import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { NodeCollectionArticles } from '@articles/node-collection-articles.entity';

@Entity('collection_articles')
export class CollectionArticles {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => NodeCollectionArticles, (node) => node.collectionArticles)
  nodesCollectionArticles: NodeCollectionArticles[];

  @OneToOne(() => NodeCollectionArticles)
  @JoinColumn({ name: 'root_node_collection_articles_id' })
  rootNodeCollectionArticles: NodeCollectionArticles;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;
}
