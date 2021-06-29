import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1624818157042 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid"
                    },
                    {
                        name: "user_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_sender"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        columnNames: ["user_receiver"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        columnNames: ["tag_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "tags",
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }
}
