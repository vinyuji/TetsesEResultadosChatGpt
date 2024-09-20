function handleLogin() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    var errorMessage = document.getElementById('login-error');

    // Limpa mensagens de erro
    errorMessage.style.display = 'none';

    // Validação básica dos campos
    if (!email || !password) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        return;
    }

    // Simula sucesso no login e redireciona para o ChatGPT
    window.location.href = 'https://chat.openai.com';
}

function handleCadastro() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var errorMessage = document.getElementById('cadastro-error');

    // Limpa mensagens de erro
    errorMessage.style.display = 'none';

    // Validação básica dos campos
    if (!nome || !email || !senha) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        return;
    }

    // Simula sucesso no cadastro
    alert('Cadastro realizado com sucesso!');
}
