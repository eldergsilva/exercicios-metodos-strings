const nome = 'Guido Cerqueira';
function criarNickName(nome) { 
    let nomeTratado = nome.replaceAll(" ","").toLowerCase()
    let nickName="@"+nomeTratado[0]+nomeTratado.slice(1,12)
    console.log(nickName);   
}
  
 criarNickName(nome)
 