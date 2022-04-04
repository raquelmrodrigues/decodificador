var seletor = document.getElementById('seletor');
var input = document.getElementById('input');
var incremento = document.getElementById('incremento');
var acao = document.getElementById('acao');
var radio = document.getElementsByName('radio');
var mostra = document.getElementById('mostra');



seletor.addEventListener('change', function() {
    if (seletor.value == "Cifra de César") {
        document.getElementById('elementoEscondido').style.display = "block";
    } else {
        document.getElementById('elementoEscondido').style.display = "none";
    }
});

radio.forEach((input) => {
    input.addEventListener('change', function checked(){
        if (document.getElementById('codificar').checked) {
            acao.firstChild.data = "Codificar"
        } else {
            acao.firstChild.data = "Decodificar"
        }
    });
})

function codificadorCesar(input, incremento) {
    let resultado = []
    input = input.toLowerCase()
    for (let i = 0; i < input.length; i++) {
        let codigo = input.charCodeAt(i) + parseInt(incremento)
        while (codigo > 122) {
            codigo = (codigo - 122) + 96 
        }
        resultado.push(String.fromCharCode(codigo))
    }
    mostra.innerHTML = resultado
}

function codificadorBase (input) {
    resultado = btoa(input)
    mostra.innerHTML = resultado
}

function decodificadorBase (input) {
    resultado = atob(input)
    mostra.innerHTML = resultado
}


acao.addEventListener('click', function() {
    if(seletor.value == "Cifra de César" && document.getElementById('codificar').checked) {
        codificadorCesar(input.value, incremento.value)
    } else if (seletor.value == "Base64" && document.getElementById('codificar').checked) {
        codificadorBase (input.value)
    } else if (seletor.value == "Base64" && document.getElementById('decodificar').checked) {
        decodificadorBase (input.value)
    } 
    
})

