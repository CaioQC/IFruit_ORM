import { 
    Column, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Produto } from "./Produto";

@Entity()
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string; 

    @Column()
    descricao: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao: Date;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[];

    constructor(nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = new Date();
    }
}
