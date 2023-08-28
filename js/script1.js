var produto = [];
var valor = [];

function salvarUser(){

    let nomeProduto = document.getElementById("produto").value;
    let valorProduto = document.getElementById("valor").value;

    if(!nomeProduto || !valorProduto) {
        alert("favor preencha os campos para acessar o site");
    }

    if (nomeProduto) {
    produto.push(nomeProduto);
    valor.push(valorProduto);

    criarLista();

    document.getElementById("produto").value = '';
    document.getElementById("valor").value = '';

    }

}

 

function criarLista() {
    let table = document.getElementById("tabela").innerHTML = "<tr><th>Id</th><th>Produtos</th><th>Valor</th><th>Ações</th></tr>";
    for (let i = 0; i <= (produto.length - 1); i++) {

        table += "<tr><td>" + (i + 1) + "</td><td>" + produto[i] + "</td><td>" + valor[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'> Excluir </button> </td></tr>";

        document.getElementById('tabela').innerHTML = table;

    }

}

function editar(i){

document.getElementById('produto').value = produto[(i - 1)];
produto.splice(produto[(i - 1), 1]);
document.getElementById('valor').value = valor[(i - 1)];
valor.splice(valor[(i - 1), 1]);

}

function excluir(i){

produto.splice(i - 1, 1);
valor.splice(i - 1, 1);
document.getElementById("tabela").deleteRow(i);

}

 