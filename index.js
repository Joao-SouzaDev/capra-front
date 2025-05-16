const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/animais', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages/listagemAnimais.html'));
});
app.get('/assets', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assets/'));
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});