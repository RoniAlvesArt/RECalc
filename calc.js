export function custosFixos(){
    //custos fixos
    let aluguel_espaco = 700;
    let manutencao = 200;
    let energia = 300;
    let internet = 100;

    return (
            aluguel_espaco + manutencao + energia + internet
            );
}

export function custosPontuais(){

    //custos pontuais
    let deslocamento =70;
    let hospedagem = 0;
    let alimentacao = 10;
    let locacao = 0;
    let licencas = 0;

    return (
           deslocamento + hospedagem + alimentacao + locacao + licencas 
    );
}


export function custosEdicao(){ 
    //custos da edição e produção
    let salario_fotografo = 1800;
    let salario_filmmaker =- 3500;
    let salario_editor = 2500;
    let salario_auxiliares = 1200;
    let salario_administracao = 3000;

    let tempo_edicao = 24;
    let tempo_producao = 4;

    let diaria = 8;
    //horas trabalhadas no dia, CLT

    let horas = diaria*22;
    //horas trabalhadas no mes, CLT
    
    let custo_hora = salario_editor/horas;
    //valor por hora trabalhada

    let custo_diaria = custo_hora*diaria;
    //valor por dia trabalhado


    return (
        tempo_edicao/diaria * custo_diaria //dias trabalhados * custo da diária
 );
}
