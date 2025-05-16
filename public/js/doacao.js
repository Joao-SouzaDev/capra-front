document.addEventListener('DOMContentLoaded', () => {
  // Seleções principais
  const btnPix = document.querySelector('.btn-pix');
  const pixDialog = document.getElementById('pixDialog');
  const qrcodeContainer = document.getElementById('qrcode');
  const btnFecharPix = document.getElementById('fecharPix');

  // Função para gerar chave PIX aleatória simples
  function gerarChavePixAleatoria() {
    const tiposChave = ['CPF', 'E-mail', 'Telefone', 'Chave Aleatória'];
    const tipo = tiposChave[Math.floor(Math.random() * tiposChave.length)];
    switch(tipo) {
      case 'CPF':
        return '123.456.789-00'; // Exemplo fixo
      case 'E-mail':
        return 'exemplo'+Math.floor(Math.random()*1000)+'@email.com';
      case 'Telefone':
        return '(11) 91234-5678';
      case 'Chave Aleatória':
        return Math.random().toString(36).substring(2, 15);
      default:
        return 'pix@exemplo.com';
    }
  }

  // Função para gerar código Pix (string básica)
  function gerarCodigoPix() {
    const chavePix = gerarChavePixAleatoria();
    const valor = (Math.floor(Math.random() * 500) + 1).toFixed(2).replace('.', ',');
    return `00020126580014BR.GOV.BCB.PIX0114${chavePix}520400005303986540${valor}5802BR5913Doação Peludinhos6009Sao Paulo61080540900062070503***6304B14F`;
  }

  // Abrir modal PIX e gerar QRCode
  function abrirModalPix() {
    qrcodeContainer.innerHTML = ''; // limpa QR code antigo
    const codigoPix = gerarCodigoPix();
    new QRCode(qrcodeContainer, {
      text: codigoPix,
      width: 200,
      height: 200,
    });
    pixDialog.showModal();
  }

  // Fechar modal PIX
  function fecharModalPix() {
    pixDialog.close();
  }

  // Eventos PIX
  btnPix.addEventListener('click', abrirModalPix);
  btnFecharPix.addEventListener('click', fecharModalPix);

  pixDialog.addEventListener('click', e => {
    if (e.target === pixDialog) {
      fecharModalPix();
    }
  });

  // Modal Doação
  const overlay = document.getElementById('overlay');
  const modalDoacao = document.getElementById('modalDoacao');
  const btnCancelar = document.getElementById('btnCancelar');
  const formDoacao = document.getElementById('formDoacao');
  const valorDoacaoInput = document.getElementById('valorDoacao');
  const descDoacao = document.getElementById('descDoacao');

  // Abrir modal doação ao clicar em qualquer botão DOAR
  const botoesDoar = document.querySelectorAll('.btn-doar');
  botoesDoar.forEach(btn => {
    btn.addEventListener('click', () => {
      // Pegar o valor e descrição do cartão pai
      const card = btn.closest('.card');
      if (!card) return;
      const valor = card.getAttribute('data-valor');
      const desc = card.getAttribute('data-desc');
      valorDoacaoInput.value = valor;
      descDoacao.textContent = desc;

      overlay.style.display = 'block';
      modalDoacao.style.display = 'block';
    });
  });

  // Fechar modal doação
  btnCancelar.addEventListener('click', () => {
    overlay.style.display = 'none';
    modalDoacao.style.display = 'none';
    formDoacao.reset();
  });

  // Fechar modal se clicar no overlay
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    modalDoacao.style.display = 'none';
    formDoacao.reset();
  });

  // Submit do form
  formDoacao.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pela sua doação, ' + formDoacao.nome.value + '!');
    overlay.style.display = 'none';
    modalDoacao.style.display = 'none';
    formDoacao.reset();
  });
});
