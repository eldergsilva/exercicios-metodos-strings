const comentario = "Esse COVID é muito perigoso!";
const arrayDePalavras = comentario.split(" ");
let bloqueado = false;

for (let palavra of arrayDePalavras) {
    let palavraFormatada = palavra.toLowerCase();
    
    if (palavraFormatada === "covid" || palavraFormatada === "pandemia") {
        bloqueado = true; 
        break; 
    }
}  

 
if (bloqueado) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
}