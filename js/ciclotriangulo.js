function ciclos() {
    let ciclo = document.getElementById('ciclo').value;
    let resultado = '';
    let piramide = '';
    for (var i = 0; i < ciclo; i++) {
        piramide += "#";
        resultado += "<p>" + piramide + "</p>"
    }
    document.getElementById('lugar').innerHTML = resultado;
}