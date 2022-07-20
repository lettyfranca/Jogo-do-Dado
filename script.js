/**
 * Jogo do Dado
 * @author Letícia França
 */

//Math.floor arredonda o número
//Math.random sorteia números aleatórios
//Math.random sempre inicializa em 0, portanto nesse caso somamos 1,
//para que o random funcione entre 1 - 6.

function jogar(){
    let sorteio = Math.floor(Math.random() * 6 + 1);

    switch(sorteio){
        case 1:
            document.getElementById("face").src = "face1.png";
            break;
        case 2:
            document.getElementById("face").src = "face2.png";
            break;
        case 3:
            document.getElementById("face").src = "face3.png";
            break;
        case 4:
            document.getElementById("face").src = "face4.png";
            break;
        case 5:
            document.getElementById("face").src = "face5.png";
            break;
        case 6:
            document.getElementById("face").src = "face6.png";
            break;
        default:
            //caso contrário
            break;
    }
}
