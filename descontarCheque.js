// Vamos criar uma promise para simular analogia de descontar cheque
const descontarCheque= (diaAtual, diaCheque) => new Promise((resolve, reject)=>{
    if(diaAtual===diaCheque){
        resolve(`Cheque descontado no dia ${diaAtual}`);
    }else{
        reject(`Hojé dia ${diaAtual}. O cheque tem que ser descontado dia ${diaCheque}`);
    }
});

descontarCheque(12, 20)
    .then((data)=> {
        console.log('cheque descontado')
    })
    .catch((error)=> {
        console.log('Não é dia de descontar o cheque')
    });


descontarCheque(12, 20)
    .then((data)=> {
        console.log('cheque descontado')
    })
    .catch((error)=> {
        console.log('Não é dia de descontar o cheque')
    });

descontarCheque(12, 20)
    .then((data)=> {
        console.log('cheque descontado')
    })
    .catch((error)=> {
        console.log('Não é dia de descontar o cheque')
    });

descontarCheque(12, 20)
    .then((data)=> {
        console.log('cheque descontado')
    })
    .catch((error)=> {
        console.log('Não é dia de descontar o cheque')
    });

descontarCheque(12, 20)
    .then((data)=> {
        console.log('cheque descontado')
    })
    .catch((error)=> {
        console.log('Não é dia de descontar o cheque')
    });

descontarCheque(12, 20)
    .then((data)=> {
        console.log('cheque descontado')
    })
    .catch((error)=> {
        console.log('Não é dia de descontar o cheque')
    });

descontarCheque(12, 20)
    .then((data)=> {
        console.log('cheque descontado')
    })
    .catch((error)=> {
        console.log('Não é dia de descontar o cheque')
    });

descontarCheque(12, 20)
    .then((data)=> {
        console.log('cheque descontado')
    })
    .catch((error)=> {
        console.log('Não é dia de descontar o cheque')
    });

descontarCheque(12, 20)
    .then((data)=> {
        console.log('cheque descontado')
    })
    .catch((error)=> {
        console.log('Não é dia de descontar o cheque')
    });