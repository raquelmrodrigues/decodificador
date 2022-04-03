var seletor = document.getElementById('seletor')

seletor.addEventListener('change', function() {
    if(seletor.value == "Cifra de César"){
        document.getElementById('elementoEscondido').style.display = "block";
    } else {
        document.getElementById('elementoEscondido').style.display = "none";
    }
});

