const cpf = "011.022.033-44";
const cnpj = "01.102.203/0001-44";

function removerPontuacao(documento) {
    if (documento) {
         
        let resultado = documento.replaceAll(".", "")
                                 .replaceAll("-", "")
                                 .replaceAll("/", "");
        console.log(resultado);
    }
}

 
removerPontuacao(cpf);  
removerPontuacao(cnpj);  