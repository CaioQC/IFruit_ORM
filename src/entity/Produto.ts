import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Categoria } from "./Categoria";

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string; 

    @Column({ nullable: true })
    descricao?: string;

    @Column("decimal", { precision: 10, scale: 2 })
    preco: number;

    @Column()
    quantidade: number;

    @CreateDateColumn()
    dataCriacao: Date;

    @Column({ nullable: true })
    dataAtualizacao?: Date;

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, { eager: true }) 
    @JoinColumn({ name: "categoriaId" }) 
    categoria: Categoria;

    constructor(nome: string, descricao: string, preco: number, quantidade: number, categoria: Categoria) {
        this.nome = nome;
        this.descricao = descricao ?? "";
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoria = categoria;
        this.dataCriacao = new Date();
    }
}
