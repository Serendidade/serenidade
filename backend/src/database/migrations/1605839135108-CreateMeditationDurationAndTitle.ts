import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateMeditationDurationAndTitle1605839135108
  implements MigrationInterface {
  name = 'CreateMeditationDurationAndTitle1605839135108'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `meditations` ADD COLUMN duration int')
    await queryRunner.query(
      'ALTER TABLE `meditations` ADD COLUMN title varchar(120)'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `meditations` DROP COLUMN duration')
    await queryRunner.query('ALTER TABLE `meditations` DROP COLUMN title ')
  }
}
