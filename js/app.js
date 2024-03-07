let valorTotal;
limpar();

function adicionar() {
    //recuperar os valores (nome, quantidade e valor)
    let produto = document.getElementById('produto').value;
    // A função split faz com que a string seja separada em uma array utilizando o item entre aspas como separador exemp : ('Copo - R$100') para ['Copo', 'R$100']
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço - subTotal
    let subTotal = quantidade * valorProduto;
    //add ao carrinho
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
   </section>`
    //Mensagem de erro se o usuario não informar uma quantidade valida
    if (quantidade <= 0) {
        alert('Quantidade invalida, verifique!')
        limpar()
    }

    //atualizar o total
    valorTotal = valorTotal + subTotal;
    let somaTotal = document.getElementById('valor-total');
    somaTotal.innerHTML = `R$ ${valorTotal}`
    //Zerar a quantidade apos adicionar o produto
    document.getElementById('quantidade').value = 0;

}



function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}