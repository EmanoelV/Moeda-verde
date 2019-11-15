function confirmInputs() {
    let peso = document.getElementById("peso").value
    let preco = document.getElementById("preco").value
    let output = document.getElementById("output")
    
    if (preco == 0 && peso == 0) {
        output.value = "Adicione os valores abaixo por favor."
    }
    else if (preco == 0) {
        output.value = "Adicione o PREÇO do kilograma(kg)"
    } else if (peso == 0) {
        output.value = "Adicione o PESO em kilograma(kg)"
    } else {
        Calcule(peso, preco)
    }
}

function Calcule(peso, preco) {
    let output = document.getElementById("output")
    let valorReal = peso * preco
    let moedasVerdes = Math.trunc(valorReal)
    let pontosVerdes = Math.trunc( (valorReal - moedasVerdes + 0.0001) * 10 ) //0.0001 é um peueno número de ajuste de um erro da função 

    output.value = `Moedas Verdes: ${moedasVerdes}
Pontos: ${pontosVerdes}`
}

function ajust() {
    let height = window.innerHeight
    let width = window.innerWidth
    
    document.getElementById("container").style.top = 0.05*height + "px"
    document.getElementById("img").style.top = 0.5*height + "px"
}