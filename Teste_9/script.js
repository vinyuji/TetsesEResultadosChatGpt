const users = JSON.parse(localStorage.getItem('users')) || [];
let mesas = JSON.parse(localStorage.getItem('mesas')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const createMesaForm = document.getElementById('createMesaForm');

    // Lógica de login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                window.location.href = 'reservas.html'; // Redirecionar para a página de reservas
            } else {
                alert('Usuário não encontrado!');
            }
        });
    }

    // Lógica de cadastro
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('signupEmail').value;
            const cpf = document.getElementById('cpf').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password === confirmPassword) {
                users.push({ email, cpf, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Cadastro realizado com sucesso!');
                window.location.href = 'index.html'; // Redirecionar para o login
            } else {
                alert('As senhas não correspondem!');
            }
        });
    }

    // Lógica para criar mesas (página admin)
    if (createMesaForm) {
        createMesaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const numeroMesa = document.getElementById('numeroMesa').value;
            const capacidadeMesa = document.getElementById('capacidadeMesa').value;

            mesas.push({ numero: numeroMesa, capacidade: capacidadeMesa });
            localStorage.setItem('mesas', JSON.stringify(mesas));
            displayMesas();
        });

        // Exibir mesas criadas
        displayMesas();
    }
});

// Função para exibir mesas
function displayMesas() {
    const mesasCriadas = document.getElementById('mesasCriadas');
    mesasCriadas.innerHTML = '';
    mesas.forEach(mesa => {
        const mesaDiv = document.createElement('div');
        mesaDiv.textContent = `Mesa ${mesa.numero} - Capacidade: ${mesa.capacidade}`;
        mesasCriadas.appendChild(mesaDiv);
    });
}
