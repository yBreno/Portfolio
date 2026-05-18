const loginForm = document.getElementById("login")

loginForm.addEventListener("submit", function(event) {

    event.preventDefault()

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    if(email === "" || senha === ""){
        Swal.fire({
            title: "Erro!",
            text: "Todos os campos devem ser preenchidos!",
            icon: "error",
            background: "#0f0f1a",
            color: "#fff",
            confirmButtonColor: "#7c3aed"
        })
        return 
    }

    
    if(!regexEmail.test(email)){
        Swal.fire({
            title: "Email inválido!",
            text: "Digite um e-mail válido",
            icon: "warning",
            background: "#0f0f1a",
            color: "#fff"
        })
        return 
    }

    let tabelaClientes = JSON.parse(localStorage.getItem("tabelaClientes")) || [];
    
    let clienteEncontrado = tabelaClientes.find(cliente => cliente.email === email);

    if (!clienteEncontrado)
    {
        Swal.fire({
            title: "Email inválido!",
            text: "E-mail não encontrado!",
            icon: "warning",
            background: "#0f0f1a",
            color: "#fff"
        })
        return 
    }

    if (clienteEncontrado.senha !== senha)
    {
        Swal.fire({
            title: "Senha inválida!",
            text: "Digite a senha correta.",
            icon: "warning",
            background: "#0f0f1a",
            color: "#fff"
        })
        return 
    }

    
    Swal.fire({
        title: "Sucesso!",
        text: "Login realizado com sucesso!",
        icon: "success",
        background: "#0f0f1a",
        color: "#fff",
        confirmButtonColor: "#7c3aed"
    }).then(() => {
        window.location.href = "index.html"
    })

})