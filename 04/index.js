let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

const identificadorFormatado = identificador.padStart(6,"000")
console.log(identificadorFormatado);


const emailFormatado = email.trim()
console.log(`_${emailFormatado}_`);


function nomeFormatado(nome) {
let nomeFormatado ="";
let arrayDeNomes = nome.split(" ");

for( let item  of arrayDeNomes){
   let primeiraLetra = item.slice(0, 1);
   let restantedoNome =item.slice(1);  
   nomeFormatado += primeiraLetra.toUpperCase()+ restantedoNome+" "  
     
}
console.log(nomeFormatado.trim());
}
 

nomeFormatado(nome);



 