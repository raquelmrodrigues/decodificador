var seletor = document.getElementById('seletor');
var input = document.getElementById('input');
var incremento = document.getElementById('incremento');
var codificar = document.getElementById('codificar');

seletor.addEventListener('change', function() {
    if (seletor.value == "Cifra de César") {
        document.getElementById('elementoEscondido').style.display = "block";
    } else {
        document.getElementById('elementoEscondido').style.display = "none";
    }
});

function codificador(input, incremento) {
    let resultado = []
    input = input.toLowerCase()
    for (let i = 0; i < input.length; i++) {
        let codigo = input.charCodeAt(i) + parseInt(incremento)
        while (codigo > 122) {
            codigo = (codigo - 122) + 96 
        }
        resultado.push(String.fromCharCode(codigo))
    }
    console.log(resultado)
}

codificar.addEventListener('click', function() {codificador(input.value, incremento.value)})

