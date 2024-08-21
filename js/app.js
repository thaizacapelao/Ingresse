let qntCadeiraSuperior = 200;
let qntCadeiraInferior = 400;

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso.value == 'pista') {
        comprarPista(qtd);
        }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista) {
        alert('Quantidade de ingressos indisponível para a pista!');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com Sucesso.');
    }
 }

