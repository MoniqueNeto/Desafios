
  
function basket(strings){
    const arrayStrings = strings.split(" ");
    const arrayNumeros = arrayStrings.map(Number);

    let piorJogo = 1;
    let recordes = 0;
    let maiorPontuacao = 0;
    let menorPontuacao = 0;

    for(i=0; i< arrayNumeros.length; i++){
        if (i == 0){
            maiorPontuacao = arrayNumeros[i];
            menorPontuacao = arrayNumeros[i];
        } else {
            if(arrayNumeros[i] > maiorPontuacao)
            {
                maiorPontuacao = arrayNumeros[i];
                recordes++;
            }else{
                if(arrayNumeros[i] < menorPontuacao)
                {
                    piorJogo = i+1;
                    menorPontuacao = arrayNumeros[i];
                }
            }

        }
    }
    return [recordes,piorJogo];

}
console.log(basket("10 20 20 8 25 3 0 30 1"))