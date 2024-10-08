document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Previne o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "admin";  // Nome de usuário
    const validPassword = "123456";  // Senha

    if (username === validUsername && password === validPassword) {
        document.getElementById("secret-content").style.display = "block";
        document.querySelector(".login-page").style.display = "none";
    } else {
        alert("Usuário ou senha inválidos!");
    }
});
