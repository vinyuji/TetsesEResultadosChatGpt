let users = []; // Maximum 10 users
let currentPage = 1;
let perPage = 5;
let repos = [];

// Toggle between light and dark themes
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Switch between login and signup pages
document.getElementById('login-btn').addEventListener('click', () => showPage('login-page'));
document.getElementById('signup-btn').addEventListener('click', () => showPage('signup-page'));

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Login logic
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        fetchGitHubData(user.github);
        showPage('home-page');
    } else {
        document.getElementById('login-error').innerText = 'Usuário ou senha incorretos.';
    }
}

// Signup logic
function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const github = document.getElementById('signup-github').value;

    if (!validateEmail(email)) {
        document.getElementById('signup-error').innerText = 'E-mail inválido.';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('signup-error').innerText = 'As senhas não correspondem.';
        return;
    }

    if (users.length >= 10) {
        document.getElementById('signup-error').innerText = 'Limite de cadastros atingido.';
        return;
    }

    users.push({ email, password, github });
    document.getElementById('signup-error').innerText = 'Cadastro realizado com sucesso!';
    setTimeout(() => showPage('login-page'), 2000);
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Fetch GitHub data
async function fetchGitHubData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    document.getElementById('github-avatar').src = data.avatar_url;
    document.getElementById('github-name').innerText = data.name;
    document.getElementById('github-email').innerText = data.email || 'Neste login não há nenhum dado para retornar.';

    const reposResponse = await fetch(data.repos_url);
    repos = await reposResponse.json();
    displayRepos(currentPage);
}

// Display repos with pagination
function displayRepos(page) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const slicedRepos = repos.slice(start, end);

    const reposDiv = document.getElementById('repos');
    reposDiv.innerHTML = '';

    slicedRepos.forEach(repo => {
        const repoDiv = document.createElement('div');
        repoDiv.innerText = repo.name;
        reposDiv.appendChild(repoDiv);
    });
}

function nextPage() {
    if (currentPage * perPage < repos.length) {
        currentPage++;
        displayRepos(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayRepos(currentPage);
    }
}
