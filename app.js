import { listarCursos, inserirCurso } from "./cursoRepository.js"
import { listarAlunos, inserirAluno } from "./alunoRepository.js"
import { listarMotos, inserirMoto } from "./motosRepository.js"
import { listarPizzas, inserirPizza } from "./pizzaRepository.js"

import express from 'express'
const api = express();
api.use(express.json());


api.get('/calculadora/somar/:n1/:n2', (req, resp) => {
  let num1 = Number(req.params.n1);
  let num2 = Number(req.params.n2);

  let soma = num1 + num2;

  resp.send({
    resultado: soma
  });
})

api.get('/calculadora/subtrair', (req, resp) => {
  let n1 = Number(req.query.n1);
  let n2 = Number(req.query.n2);

  let sub = n1 - n2;

  resp.send({
    resultado: sub
  })
})

api.post('/calculadora/multiplicar', (req, resp) => {
  let valores = req.body;
  
  let multp = valores.n1 * valores.n2;

  resp.send({
    resultado: multp
  })

})

api.get('/curso', async (req, resp) => {
  let registros = await listarCursos();
  resp.send(registros);
})

api.post('/curso', async (req, resp) => {
  let novoCurso = req.body;
  
  let id = await inserirCurso(novoCurso);

  resp.send({
    novoId: id
  })
})


api.get('/aluno', async (req, resp) => {
  let registros = await listarAlunos();
  resp.send(registros);
})

api.post('/aluno', async (req, resp) => {
  let novoAluno = req.body;
  
  let id = await inserirAluno(novoAluno);

  resp.send({
    novoId: id
  })
})

api.get('/moto', async (req, resp) => {
  let registros = await listarMotos();
  resp.send(registros);
})

api.post('/moto', async (req, resp) => {
  let novaMoto= req.body;
  
  let id = await inserirMoto(novaMoto);

  resp.send({
    novoId: id
  })
})

api.get('/pizza', async (req, resp) => {
  let registros = await listarPizzas();
  resp.send(registros);
})

api.post('/pizza', async (req, resp) => {
  let novaPizza= req.body;
  
  let id = await inserirPizza(novaPizza);

  resp.send({
    novoId: id
  })
})


api.listen(5010, () => console.log('..: API subiu com sucesso!'));