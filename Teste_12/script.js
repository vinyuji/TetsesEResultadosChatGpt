// Simulação de banco de dados com vetores
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let mesas = [
    { numero: 1, capacidade: 5, reservada: false },
    { numero: 2, capacidade: 5, reservada: false },
    { numero: 3, capacidade: 5, reservada: false },
    { numero: 4, capacidade: 5, reservada: false },
    { numero: 5, capacidade: 5, reservada: false }
];

// Função para cadastrar novo usuário
document.getElementById('cadastroForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('cadastroNome').value;
    const email = document.getElementById('cadastroEmail').value;
    const senha = document.getElementById('cadastroPassword').value;

    // Verificar se o email já existe
    if (usuarios.some(usuario => usuario.email === email)) {
        document.getElementById('cadastroMessage').innerText = "E-mail já cadastrado!";
        return;
    }

    // Adicionar novo usuário
    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Salvar no localStorage
    document.getElementById('cadastroMessage').innerText = "Cadastro realizado com sucesso!";
    setTimeout(() => {
        window.location.href = "index.html"; // Redireciona para o login
    }, 2000);
});

// Função de login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginPassword').value;

    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    if (usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        window.location.href = "reservas.html"; // Redireciona para a página de reservas
    } else {
        document.getElementById('loginMessage').innerText = "E-mail ou senha incorretos!";
    }
});

// Função para mostrar mesas e fazer reserva
document.addEventListener('DOMContentLoaded', function() {
    const mesasContainer = document.getElementById('mesasContainer');
    mesasContainer.innerHTML = ''; // Limpa o container antes de adicionar as mesas

    mesas.forEach((mesa, index) => {
        const mesaDiv = document.createElement('div');
        mesaDiv.className = `mesa ${mesa.reservada ? 'reservada' : 'livre'}`;
        mesaDiv.innerText = `Mesa ${mesa.numero} - ${mesa.capacidade} lugares`;
        
        if (!mesa.reservada) {
            mesaDiv.style.backgroundColor = 'lightgreen'; // Verde se livre
            mesaDiv.addEventListener('click', () => reservarMesa(index, mesaDiv));
            mesaDiv.classList.add('hoverable'); // Adiciona classe para animação
        } else {
            mesaDiv.style.backgroundColor = 'lightcoral'; // Vermelho se reservada
        }

        mesasContainer.appendChild(mesaDiv);
    });

    // Logout
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('usuarioLogado');
        window.location.href = "index.html";
    });
});



// Função para reservar uma mesa
function reservarMesa(index, mesaDiv) {
    if (!mesas[index].reservada) {
        mesas[index].reservada = true;
        localStorage.setItem('mesas', JSON.stringify(mesas)); // Salva estado no localStorage
        mesaDiv.style.backgroundColor = 'lightcoral'; // Muda a cor para vermelho
        alert(`Você reservou a mesa ${mesas[index].numero}`);
    } else {
        alert("Mesa já reservada!");
    }
}
