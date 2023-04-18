import {
    custosFixos,
    custosPontuais,
    custosEdicao

} from "./calc.js";

/*------------------------------ Variáveis ------------------------------*/
//custos fixos
let aluguel_espaco = 700;
let manutencao = 200;
let energia = 300;
let internet = 100;

//custos pontuais
let deslocamento =70;
let hospedagem = 0;
let alimentacao = 10;
let locacao = 0;
let licencas = 0;

//custos da edição e produção
let salario_fotografo = 1800;
let salario_filmmaker =- 3500;
let salario_editor = 2500;
let salario_auxiliares = 1200;
let salario_administracao = 3000;

let tempo_edicao = 24;
let tempo_producao = 4;



/*------------------------------ Funções ------------------------------*/
const custos_fixos = custosFixos(aluguel_espaco, manutencao, energia, internet);


const custos_pontuais = custosPontuais(deslocamento,hospedagem,alimentacao,locacao,licencas);
console.log(custos_pontuais);


//será necessáro refatorar e incluir uma estrutura de seleção
//para indicar qual o profissional e qual a atividade
const custos_edicao = custosEdicao(salario_editor, tempo_edicao)
console.log(custos_edicao);
