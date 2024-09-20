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
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var cep = document.getElementById('cep').value;
    var github = document.getElementById('github').value;
    var senha = document.getElementById('senha').value;
    var confirmaSenha = document.getElementById('confirmaSenha').value;

    var errorMessage = document.getElementById('cadastro-error');
    var successMessage = document.getElementById('cadastro-success');

    // Limpa mensagens
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    // Validação básica dos campos
    if (!nome || !sobrenome || !email || !telefone || !cep || !github || !senha || !confirmaSenha) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        return;
    }

    // Validação de senha
    if (senha !== confirmaSenha) {
        errorMessage.textContent = 'As senhas não coincidem.';
        errorMessage.style.display = 'block';
        return;
    }

    // Simula sucesso no cadastro
    successMessage.textContent = 'Cadastro realizado com sucesso!';
    successMessage.style.display = 'block';

    // Animação de sucesso
    setTimeout(function() {
        successMessage.textContent = 'Cadastro criado!';
    }, 2000);
}
