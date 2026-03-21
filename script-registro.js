const formCadastro = document.getElementById("cadastro")

formCadastro.addEventListener("submit", function(event){
    
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    if(nome === "" || email === "" || senha === ""){
        alert("Preencha todos os campos")
        return
    }

    if(senha.length < 6){
        alert("A senha precisa ter pelo menos 6 caracteres")
        return
    }

    localStorage.setItem("email", email)
    localStorage.setItem("senha", senha)

    alert("Conta criada com sucesso!")

    window.location.href = "login.html"

})