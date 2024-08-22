// let pista = 100;
// let qntCadeiraSuperior = 200;
// let qntCadeiraInferior = 400;

function comprar() {
    let qtdCompra = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso');

    if (tipoIngresso.value == "pista") {
        comprarPista(qtdCompra);
    } else  if (tipoIngresso.value == "superior") {
        comprarSuperior(qtdCompra);
    } else {
        comprarInferior(qtdCompra);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
      if (qtd > qtdPista) {
        alert("Quantidade de ingressos indisponível para a pista!");
      } else {
        qtdPista = qtdPista - qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Compra realizada com Sucesso.");
      }
 }

 function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
      if (qtd > qtdSuperior) {
        alert("Quantidade de ingressos indisponível para a Superior!");
      } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert("Compra realizada com Sucesso.");
      }
 }

 function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
      if (qtd > qtdInferior) {
        alert("Quantidade de ingressos indisponível para a Superior!");
      } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert("Compra realizada com Sucesso.");
      }
 }

// function comprarIngresso(ingressoElementId, tipoIngresso, qtdCompra) {
//     let qtdTotal = parseInt(
//       document.getElementById(ingressoElementId).textContent
//     );
  
//     if (qtd > qtdTotal) {
//       alert(`Quantidade de ingressos indisponível para a ${tipoIngresso}!`);
//     } else {
//       qtdTotal = qtdTotal - qtdCompra;
//       document.getElementById(ingressoElementId).textContent = qtdTotal;
//       alert("Compra realizada com Sucesso.");
//     }
//   }
