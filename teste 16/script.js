document.getElementById('form-inscricao').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert('Inscrição realizada com sucesso!');
    this.reset(); // Reseta o formulário
});
