import { connection } from "./connection.js";


export async function listarMotos() {
  const comando = `
    select *
      from trabalhos_motos
  `;

  let [registros] = await connection.query(comando);
  return registros;
}


export async function inserirMoto(novaMoto) {
  const comando = `
    INSERT INTO trabalhos_motos (placa_moto, modelo, descricao_trabalho, data_entrada, data_saida, status, valor)
               values (?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novaMoto.placa_moto, novaMoto.modelo, novaMoto.descricao_trabalho, novaMoto.data_entrada, novaMoto.data_saida, novaMoto.status, novaMoto.valor]);
  return info.insertId;
}