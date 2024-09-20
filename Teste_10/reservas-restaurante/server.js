const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuração do MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario', // seu usuário MySQL
    password: 'sua_senha', // sua senha MySQL
    database: 'restaurante'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao MySQL!');
});

// Array de mesas (Exemplo)
const mesas = [
    { numero: 1, capacidade: 6, reservada: false },
    { numero: 2, capacidade: 6, reservada: false },
    { numero: 3, capacidade: 6, reservada: false },
    { numero: 4, capacidade: 6, reservada: false },
    { numero: 5, capacidade: 6, reservada: false },
];

// Rota de Cadastro
app.post('/cadastro', async (req, res) => {
    const { email, senha, cpf } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);

    db.query('INSERT INTO usuarios (email, senha, cpf) VALUES (?, ?, ?)', [email, hashedPassword, cpf], (err, result) => {
        if (err) {
            return res.status(400).json({ message: 'Erro ao cadastrar usuário!' });
        }
        res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
    });
});

// Rota de Login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).json({ message: 'Usuário não encontrado!' });
        }

        const user = results[0];
        const match = await bcrypt.compare(senha, user.senha);
        if (!match) {
            return res.status(400).json({ message: 'Senha incorreta!' });
        }

        res.status(200).json({ message: 'Login bem-sucedido!', user });
    });
});

// Rota para listar mesas
app.get('/mesas', (req, res) => {
    res.json(mesas);
});

// Rota para reservar mesa
app.post('/reservar', (req, res) => {
    const { numeroMesa } = req.body;

    const mesa = mesas.find(m => m.numero === numeroMesa);
    if (!mesa) {
        return res.status(404).json({ message: 'Mesa não encontrada!' });
    }

    if (mesa.reservada) {
        return res.status(400).json({ message: 'Mesa já reservada!' });
    }

    mesa.reservada = true;
    res.json({ message: 'Mesa reservada com sucesso!', mesa });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
