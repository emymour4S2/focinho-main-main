// scripts.js
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').innerHTML =
            `<div class="alert alert-success">Mensagem enviada com sucesso! Entraremos em contato em breve.</div>`;
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerHTML =
            `<div class="alert alert-danger">Por favor, preencha todos os campos.</div>`;
    }
});