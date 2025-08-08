import { connection } from "./connection.js";


export async function listarAlunos() {
  const comando = `
    select *
      from aluno
  `;

  let [registros] = await connection.query(comando);
  return registros;
}


export async function inserirAluno(novoAluno) {
  const comando = `
    INSERT INTO aluno (nome, email, data_nascimento, curso_id)
               values (?, ?, ?, ?)
  `

  let [info] = await connection.query(comando, [novoAluno.nome, novoAluno.email, novoAluno.data_nascimento, novoAluno.curso_id]);
  return info.insertId;
}