async function carregaListaAnimais() {
    animais = await fetch('http://localhost:3000/animal')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error('Error loading header:', error));
    adicionaAnimaisNaLista(animais);
}

function adicionaAnimaisNaLista(animais) {
    const listaAnimais = document.getElementById('listaAnimais');
    listaAnimais.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    animais.forEach(animal => {
        const li = document.createElement('li');
        li.textContent = animal.nome;
        listaAnimais.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    carregaListaAnimais();
});