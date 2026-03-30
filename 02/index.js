const cpf = "12345678900";
const cnpj = "12345678000199";

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

function cnpjFormatado(cnpj){
        let parte1 = cnpj.slice(0,2);   
        let parte2 = cnpj.slice(2,5);   
        let parte3 = cnpj.slice(5,8);
        let parte4 = cnpj.slice(8,12);          
        let digito = cnpj.slice(-2);
        console.log(`${parte1}.${parte2}.${parte3}/${parte4}-${digito}`);        
}

cpfFormatado(cpf) 
cnpjFormatado(cnpj)