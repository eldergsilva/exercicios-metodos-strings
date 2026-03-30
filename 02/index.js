const cpf = "12345678900";
 
function cpfFormatado(cpf) { 
      
    if (cpf.length !== 11) {
        console.log("CPF Inválido");
    } else {
        
        let parte1 = cpf.slice(0, 3);   
        let parte2 = cpf.slice(3, 6);   
        let parte3 = cpf.slice(6, 9);   
        
        let digito = cpf.slice(-2); 
        
        console.log(`${parte1}.${parte2}.${parte3}-${digito}`);
    }
}

cpfFormatado(cpf);