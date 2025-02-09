let listanomes = [];
const listalistanomes = document.getElementById('listanomes');
const EntradaDeDados = document.getElementById('nome');
const btnAdicionar = document.getElementById('adicionar');
const btnSortear = document.getElementById('sortear');
const sorteado = document.getElementById('sorteado');

btnAdicionar.addEventListener('click', adicionarNome);
btnSortear.addEventListener('click', sortearNome);
//yjghj
function adicionarNome() {
    const nome = EntradaDeDados.value.trim();
    if (nome !== '') {
        listanomes.push(nome);
        atualizarListalistanomes();
        EntradaDeDados.value = '';
    }
}

function atualizarListalistanomes() {
    listalistanomes.innerHTML = '';
    listanomes.forEach(nome => {
        const item = document.createElement('li');
        item.textContent = nome;
        listalistanomes.appendChild(item);
    });
}

function sortearNome() {
    if (listanomes.length > 0) {
        const indexSorteado = Math.floor(Math.random() * listanomes.length);
        const listanomesorteado = listanomes[indexSorteado];
        sorteado.textContent = `O sorteado é: ${listanomesorteado}`;
    } else {
        sorteado.textContent = 'Nenhum nome adicionado!';
    }
}

