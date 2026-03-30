const celular = 99918888;  

if (String(celular).length > 8) { 
     
    let ddd = String(celular).slice(0, 2);
    let parte1 = String(celular).slice(2, 6);
    let parte2 = String(celular).slice(6);
    
    console.log(`(${ddd}) 9 ${parte1}-${parte2}`);
        
} else {
     
    let parte1 = String(celular).slice(0, 4);
    let parte2 = String(celular).slice(4);
    
    console.log(`9 ${parte1}-${parte2}`);
}