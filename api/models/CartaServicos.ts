import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("carta_servicos")
export class CartaServicos {
    @PrimaryColumn()
    id: string;
    @Column()
    nome:string;
    @Column()
    requisitos:string;
    @Column()
    prioridades:string;
    @Column()
    prazo:string;
    @Column()
    publico_alvo:string;
    @Column()
    etapas:string;
    @Column()
    email:string;
    @Column()
    local:string;
    @Column()
    horario:string;
    @Column()
    telefone:string;
    @Column()
    telefone_alternativo:string;
    @Column()
    telefone_alternativo2:string;
    @Column()
    descricao:string;
    @Column()
    tags:string;
    @Column()
    outras_informacoes:string;
    @Column()
    tipo:string;
    @Column()
    modalidade:string;
    @Column()
    secretaria:string;
    @Column()
    setor:string;
    @Column()
    link_rapido:string;
    @Column()
    id_usuario:string;
    @CreateDateColumn()
    creation_time:string;
    @UpdateDateColumn()
    modification_time:string;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}
