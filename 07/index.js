const listaEmails = [
    "jose@cubos.academy",
    "jose@cubos.academy.br",
    "jose.messias@cubos.academy",
    "jose.messias@cubos.io",
    "jose@cubos",
    "jose.messias@cubos",
    "jose.messias@.",
    "jose.@cubos",
    ".@",
    "@.",
    "jose.messias@cubos.",
    ".messias@cubos.",
    ".messias@cubos",
    "ana.silva@gmail.com",
    "dev_junior@cubos.io",
    "contato@empresa.com.br",
    "usuario.com",
    "usuario@com",
    "@gmail.com",
    "."
];
listaEmails.length

function verificadorDeEmail(listaEmails) {      
    for( let email of listaEmails){      
         
        if(email.includes("@") && email[0] !== "." && !email[0].includes(".") && email[email.length-1] !=="."){
         console.log(`${email} |  E-mail válido `);         
        }else{
          console.log(`${email} |  E-mail inválido `);        
        }       
    }
    
}
verificadorDeEmail(listaEmails)