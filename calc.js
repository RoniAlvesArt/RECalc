export function custosFixos(
    aluguel_espaco,
    manutencao,
    energia,
    internet,
){
    return (
            aluguel_espaco + manutencao + energia + internet
            );
}

export function custosPontuais(
    deslocamento,
    hospedagem,
    alimentação,
    locacao,
    licencas
    
){
    return (
           deslocamento + hospedagem + alimentação + locacao + licencas 
    );
}


export function custosEdicao(
    salario_editor,
    tempo_edicao,
){ 
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