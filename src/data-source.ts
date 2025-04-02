import "reflect-metadata"
import { DataSource } from "typeorm"
import { Categoria } from "./entity/Categoria"
import { Produto } from "./entity/Produto"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "c@tolic@",
    database: "ifruit",
    synchronize: true,
    logging: false,
    entities: [User, Produto, Categoria],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
