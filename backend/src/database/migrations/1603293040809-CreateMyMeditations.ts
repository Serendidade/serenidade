import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CreateMyMeditations1603293040809 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'my_meditations',
        columns: [
          {
            name: 'id_user',
            type: 'varchar(36)',
          },
          {
            name: 'id_meditation',
            type: 'varchar(36)',
          },
        ],
      })
    )
    await queryRunner.createForeignKeys('my_meditations', [
      new TableForeignKey({
        columnNames: ['id_user'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
      }),
      new TableForeignKey({
        columnNames: ['id_meditation'],
        referencedTableName: 'meditations',
        referencedColumnNames: ['id'],
      }),
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('my_meditations')
  }
}
