let som = new Audio()

function playClick(){    

    som.src = 'js/click.mp3'
    som.play()
    som.volume = 0.05;
}

function Limpar(){

    document.getElementById('resultado').value = ''

}

function Disk(valor){

    document.getElementById('resultado').value += valor

}

function result(){

    let calculo = document.getElementById('resultado').value 
    let resultado = eval(calculo)

    

    document.getElementById('resultado').value = resultado
}
