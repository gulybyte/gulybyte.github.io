import { Articles } from '@articles/articles.entity';
import { CollectionArticles } from '@articles/collection-articles.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('node_collection_articles')
export class NodeCollectionArticles {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => NodeCollectionArticles, { nullable: true })
  @JoinColumn({ name: 'sub_nodes_id' })
  subNodes: NodeCollectionArticles;

  @OneToOne(() => NodeCollectionArticles, { nullable: true })
  @JoinColumn({ name: 'prev_node_id' })
  prevNode: NodeCollectionArticles;

  @OneToOne(() => NodeCollectionArticles, { nullable: true })
  @JoinColumn({ name: 'next_node_id' })
  nextNode: NodeCollectionArticles;

  @OneToOne(() => Articles)
  @JoinColumn({ name: 'article_id' })
  article: Articles;

  @ManyToOne(
    () => CollectionArticles,
    (collection) => collection.nodesCollectionArticles,
  )
  @JoinColumn({ name: 'collection_articles_id' })
  collectionArticles: CollectionArticles;
}
