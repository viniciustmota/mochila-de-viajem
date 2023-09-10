const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
  criaElemento(elemento);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  if(nome.value != "" && quantidade.value != ""){
  criaElemento(itemAtual);
  }else {
    alert("Insira o nome e a quantidade do item");
  }

  itens.push(itemAtual);

  localStorage.setItem("itens", JSON.stringify(itens));

  nome.value = "";
  quantidade.value = "";
});

function criaElemento(item) {
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = item.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}
