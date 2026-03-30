
const numeroCartao = '1111222233334444';
function cartaoformatado(numeroCartao) {

let primeiros = numeroCartao.slice(0,4);
let segundos = numeroCartao.slice(4,8);
let terceiros = numeroCartao.slice(8,12);

segundos = segundos.replace(segundos,"****")
 const numeroCartaoFormatado = primeiros+segundos+terceiros
 console.log(numeroCartaoFormatado);
 
}

cartaoformatado(numeroCartao)