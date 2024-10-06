const express = require('express');
const router = express.Router();
const db = require('./db');
const bcrypt = require('bcrypt');

// Rota para a página de cadastro
router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/cadastro.html'));
});

// Rota para cadastro
router.post('/cadastro', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.send('As senhas não conferem.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) {
            return res.send('Erro ao cadastrar usuário.');
        }
        res.redirect('/login');
    });
});

// Rota para a página de login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Rota para login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.send('Usuário não encontrado.');
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.send('Senha incorreta.');
        }

        res.redirect('https://chat.openai.com'); // Redirecionar para o ChatGPT
    });
});

module.exports = router;
