let sorteio1 = [0,0,0]
let sorteio2 = [0,0,0]
let portaAberta = [0]


function sorteio(){
    sorteio1.forEach((n)=>{
        sorteio1[0] = parseInt(Math.random()*3) + 1
        sorteio1[1] = parseInt(Math.random()*3) + 1
        sorteio1[2] = parseInt(Math.random()*3) + 1

    })
    sorteio2.forEach((n)=>{
        sorteio2[0] = parseInt(Math.random()*3) + 1
        sorteio2[1] = parseInt(Math.random()*3) + 1
        sorteio2[2] = parseInt(Math.random()*3) + 1

    })
}

function abrirPorta() {
    for (i = 0; i < 1; i++) {
    
        sorteio();

        console.log(sorteio1);

        if(sorteio1[0] == sorteio1[1] && sorteio1[1] == sorteio1[2]){

            console.log("A porta 1 foi aberta. Parabéns!")

            portaAberta++;

        }else{
            console.log("Tente de novo!")
        }

        console.log(`Primeiro sorteio: ${sorteio1}`);

        if(portaAberta>0) {
            for (i = 0; i < 1; i++) {
                sorteio();
                
                console.log(sorteio2)

                function compararSorteios(sorteio1, sorteio2) {
                    if (sorteio1.length != sorteio2.length) {
                        return false;
                    }
                    
                    for (let i = 0; i < sorteio2.length; i++) {                 
                        if (sorteio1[i] !== sorteio2[i]) {
                            return false;
                        }
                    }
                    
                    return true;
                    }
                    
                    if (compararSorteios(sorteio1, sorteio2)) {
                    console.log("A porta 2 foi aberta. Parabéns!");
                    console.log("A chave da terceira porta estava na fechadura. Que sorte! Você venceu!")
                    } else {
                    console.log("Tente de novo!");
                    }

                    console.log(`Segundo sorteio: ${sorteio2}`);
            }

        }else{
            
        }
    }

}

abrirPorta();