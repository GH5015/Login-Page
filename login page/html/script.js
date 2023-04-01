const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function(event) {
	event.preventDefault();

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	if (username === "Admin" && password === "12345678") {
		alert("Você entrou com sucesso!");
	} else {
		alert("Senha ou Usuário inseridos incorretamente!");
	}
});
