const express = require("express");
const { response } = require("express");
const app =  express();

const jsonResposta = require('./pontosTuristicos.json');

const PORT = process.env.PORT || 3000;

/*Iniciando servidor*/
app.listen(PORT, "0.0.0.0", () => {
    console.log(`App rodando na porta:${ PORT }`);
});

/*Configurando respostas do servidor como json e configurando toker para todas rotas, exceto login e url inicial*/
app.use(express.json());
app.use((req, resp, next) => {
    next();
});

/**Requisicao para url inicial do sistema */
app.get("/", (request, response) => {
    response.send({'message':'ok'});
});

/*Requisicao para listar as tarefas*/
app.get('/pontos-turisticos', (request, response) => {
    response.status(200).send(jsonResposta.data);
});