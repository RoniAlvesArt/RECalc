import {
    custosFixos,
    custosPontuais,
    custosEdicao

} from "./calc.js";

/*---------- Variáveis declaradas na função em calc.js ----------*/


/*--------------------------Funções --------------------------*/
const custos_fixos = custosFixos();
console.log('Os custos fixos são:\nR$ '+custos_fixos);

const custos_pontuais = custosPontuais();
console.log('Os custos pontuais são:\nR$ '+custos_pontuais);


//será necessáro refatorar e incluir uma estrutura de seleção
//para indicar qual o profissional e qual a atividade
const custos_edicao = custosEdicao();
console.log('Os custos com edição são:\nR$ '+custos_edicao);
