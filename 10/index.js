const nomeArquivo = 'Foto da Familia.jpg';

function validaArquivo(nomeArquivo) {
    const extensao = nomeArquivo.split(".")[1];
    
    if (extensao !== "jpg" && extensao !== "jpeg" && extensao !== "gif" && extensao !== "png") {
        console.log("Arquivo inválido");
    } else {
        console.log("Arquivo válido");
    }
}

validaArquivo(nomeArquivo);