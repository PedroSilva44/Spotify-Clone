import { connection } from "./connection.js";


export async function listarPizzas() {
  const comando = `
    select *
      from pizzaa
  `;

  let [registros] = await connection.query(comando);
  return registros;
}


export async function inserirPizza(novaPizza) {
  const comando = `
    INSERT INTO pizzaa (nome, descricao, preco, tamanho, vegetariana, ingredientes, categoria)
               values (?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novaPizza.nome, novaPizza.descricao, novaPizza.preco, novaPizza.tamanho, novaPizza.vegetariana, novaPizza.ingredientes, novaPizza.categoria]);
  return info.insertId;
}