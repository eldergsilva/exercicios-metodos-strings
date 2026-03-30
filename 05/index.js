const numeroCartao = '1111222233334444';

function cartaoformatado(numero) {
    
    let inicio = numero.slice(0, 4);

    let fim = numero.slice(12);
    
   
    const resultado = inicio + "********" + fim;
    
    console.log(resultado);
}

cartaoformatado(numeroCartao);