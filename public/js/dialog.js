async function carregaDialog() {
    await fetch('components/dialog.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('dialogLogin').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
    carregaActionEntrar();
}

function carregaActionEntrar() {
    const btnEntrar = document.getElementById('btnEntrar');
    const dialogLogin = document.getElementById('dialogLoginModal');
    const botaoCancelar = document.getElementById('botaoCancelar');

    btnEntrar.addEventListener('click', () => {
        dialogLogin.showModal();
    });
    botaoCancelar.addEventListener('click', () => {
        dialogLogin.close();
    })
};


document.addEventListener("DOMContentLoaded", carregaDialog);

