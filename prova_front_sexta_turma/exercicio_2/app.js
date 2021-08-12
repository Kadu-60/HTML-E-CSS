const classifica = ["1000,00", "800,00", "500,00"];
let cLen = classifica.length;

function mostrarPremio(posicao) {
    if (posicao > classifica.length - 1) {
       console.log("Sem Premio")
    }
    else {
        console.log(classifica[posicao])
    }

}