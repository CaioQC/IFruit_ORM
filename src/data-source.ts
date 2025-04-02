import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { Produto } from "./entity/Produto"
import { Categoria } from "./entity/Categoria"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [Produto, Categoria],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
})

export async function connectDB() {
    await AppDataSource.initialize();
    console.log("📦 Banco de Dados Conectado!");
  }