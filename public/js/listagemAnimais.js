async function carregaListaAnimais() {
    animais = await fetch('http://localhost:3000/animal')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error('Error loading animais:', error));
    adicionaAnimaisNaLista(animais);
}

function adicionaAnimaisNaLista(animais) {
    const listaAnimais = document.getElementById('listaAnimais');
    listaAnimais.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    animais.forEach(animal => {
        const li = document.createElement('li');
        li.innerHTML =
            `
<div class="animal-card">
  <img src="/assets/${animal.img}" alt="Imagem de ${animal.nome}" class="animal-img" />
  <div class="card-contents">
    <div class="pet-name">
      <div class="daisy">${animal.nome}</div>
      <div class="like-main-cards">
        <img class="favorite-border" src="favorite-border0.svg" />
      </div>
    </div>

    <div class="gender-breed">
      <div class="gender">
        <div class="gender2">Genêro:</div>
        <div class="input">
          <div class="female">${animal.genero}</div>
        </div>
      </div>
      <div class="breed">
        <div class="breed2">Raça:</div>
        <div class="input2">
          <div class="mestzo">${animal.raca}</div>
        </div>
      </div>
    </div>

    <div class="age-size">
      <div class="age">
        <div class="age2">Idade:</div>
        <div class="input3">
          <div class="_6-years">${animal.idade}</div>
        </div>
      </div>
      <div class="size">
        <div class="size2">Tamanho:</div>
        <div class="input4">
          <div class="medium">${animal.tamanho}</div>
        </div>
      </div>
    </div>

    <div class="description">
      ${animal.descricao}
    </div>

    <div class="button">
      <div class="text-button">More Info</div>
    </div>
  </div>
</div>

        `;
        listaAnimais.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    carregaListaAnimais();
});