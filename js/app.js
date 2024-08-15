
let qntPista = 100;
let qntCadeiraSuperior = 200;
let qntCadeiraInferior = 400;

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;

    alert(tipoIngresso)
    alert(qtd)
}


// let totalGeral = 0;
// limpar();

// function adicionar() {

//   let produto = document.getElementById("produto").value;
//   let nomeProduto = produto.split("-")[0];
//   let valorUnitario = produto.split("R$")[1];
//   let quantidade = document.getElementById("quantidade").value;

//   let preco = quantidade * valorUnitario;
//   let carrinho = document.getElementById("lista-produtos");

//   carrinho.innerHTML =
//     carrinho.innerHTML +
//     `<section class="carrinho__produtos__produto">
// <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
// </section>`;


//   totalGeral = totalGeral + preco;
//   let valorTotal = document.getElementById("valor-total");

//   valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalGeral}</span>`;
//   document.getElementById("quantidade").value = 0;
// }

// function limpar() {
//     totalGeral = 0;
//     document.getElementById("lista-produtos").innerHTML = "";
//     document.getElementById("valor-total").textContent = "R$ 0";
//   }