import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableArticlesAndCollectionArticlesAndNodeCollectionArticles1726525515552
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'articles',
        columns: [
          {
            name: 'id',
            type: 'INTEGER',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'url',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'image',
            type: 'varchar',
          },
          {
            name: 'content',
            type: 'text',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'publishedAt',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'isIndexSeo',
            type: 'boolean',
            default: true,
          },
          {
            name: 'lang',
            type: 'varchar',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'collection_articles',
        columns: [
          {
            name: 'id',
            type: 'INTEGER',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'head_node_collection_articles_id',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'collection_articles',
      new TableForeignKey({
        columnNames: ['head_node_collection_articles_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'node_collection_articles',
        onDelete: 'SET NULL',
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'node_collection_articles',
        columns: [
          {
            name: 'id',
            type: 'INTEGER',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'parent_node_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'prev_node_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'next_node_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'article_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'collection_articles_id',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('node_collection_articles', [
      new TableForeignKey({
        columnNames: ['parent_node_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'node_collection_articles',
        onDelete: 'SET NULL',
      }),
      new TableForeignKey({
        columnNames: ['prev_node_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'node_collection_articles',
        onDelete: 'SET NULL',
      }),
      new TableForeignKey({
        columnNames: ['next_node_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'node_collection_articles',
        onDelete: 'SET NULL',
      }),
      new TableForeignKey({
        columnNames: ['article_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'articles',
        onDelete: 'SET NULL',
      }),
      new TableForeignKey({
        columnNames: ['collection_articles_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'collection_articles',
        onDelete: 'SET NULL',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('node_collection_articles');
    await queryRunner.dropTable('collection_articles');
    await queryRunner.dropTable('articles');
  }
}
