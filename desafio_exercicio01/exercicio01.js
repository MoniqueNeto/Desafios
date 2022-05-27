function matematica(num1, num2){
    const array = [];

    let operacaoDeAdicao = num1 + num2;
    let operacaoDeSubtracao = num1 - num2;
    let operacaoDeMultiplicacao = num1 * num2;
    let operacaoDeDivisao = num1 / num2;

    array.push(operacaoDeAdicao, operacaoDeSubtracao, operacaoDeMultiplicacao, operacaoDeDivisao);
    return array;


}
