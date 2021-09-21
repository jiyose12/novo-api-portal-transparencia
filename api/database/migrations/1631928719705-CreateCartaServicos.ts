import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCartaServicos1631928719705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "carta_servicos",
                columns: [
                    {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "nome",
                    type: "text",
                },
                {
                    name: "requisitos",
                    type: "text",
                },
                {
                    name: "prioridades",
                    type: "text",
                },
                {
                    name: "prazo",
                    type: "text",
                },
                {
                    name: "publico_alvo",
                    type: "text",
                },
                {
                    name: "etapas",
                    type: "text",
                },
                {
                    name: "email",
                    type: "text",
                },
                {
                    name: "local",
                    type: "text",
                },
                {
                    name: "horario",
                    type: "text",
                },
                {
                    name: "telefone",
                    type: "text",
                },
                {
                    name: "telefone_alternativo",
                    type: "text",
                },
                {
                    name: "telefone_alternativo_2",
                    type: "text",
                },
                {
                    name: "descricao",
                    type: "text",
                },
                {
                    name: "tags",
                    type: "text",
                },
                {
                    name: "outras_informacoes",
                    type: "text",
                },
                {
                    name: "tipo",
                    type: "int",
                },
                {
                    name: "modalidade",
                    type: "varchar",
                },
                {
                    name: "secretaria",
                    type: "int",
                },
                {
                    name: "setor",
                    type: "text",
                },
                {
                    name: "link_rapido",
                    type: "text",
                },
                {
                    name: "id_usuario",
                    type: "int",
                },
                {
                    name: "creation_time",
                    type: "datetime",
                    default: "now()"
                },
                {
                    name: "modification_time",
                    type: "datetime",
                    onUpdate: "now()"
                }
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("carta_servicos")
    }

}
