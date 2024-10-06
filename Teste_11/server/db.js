const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // substitua pelo seu usuário do MySQL
    password: '120521batata', // coloque sua senha do MySQL aqui
    database: 'login_db'
});

db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados MySQL.');
    }
});

module.exports = db;
