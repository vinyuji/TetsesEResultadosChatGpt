document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulação de validação (Substitua com lógica real de login)
    if (email === "user@example.com" && password === "123456") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").textContent = "Login realizado com sucesso!";
        // Redireciona para outra página ou ação desejada
        window.location.href = "chat.html"; // Redireciona para a página do chat
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").textContent = "Email ou senha incorretos!";
    }
});

// Simulação do botão de cadastro
document.getElementById("registerButton").addEventListener("click", function () {
    alert("Redirecionar para a página de cadastro.");
    // Lógica para redirecionar ou abrir a página de cadastro
});
