import { connection } from "./connection.js";


export async function listarCursos() {
  const comando = `
    select *
      from curso
  `;

  let [registros] = await connection.query(comando);
  return registros;
}


export async function inserirCurso(novoCurso) {
  const comando = `
    INSERT INTO curso (nome, carga_horaria, area)
               values (?, ?, ?)
  `

  let [info] = await connection.query(comando, [novoCurso.nome, novoCurso.carga_horaria, novoCurso.area])
  return info.insertId;
}