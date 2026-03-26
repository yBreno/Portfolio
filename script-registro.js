
const formCadastro = document.getElementById("cadastro")

formCadastro.addEventListener("submit", function(event){
    
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const repetirSenha = document.getElementById("repetirSenha").value
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!regexEmail.test(email)){
        Swal.fire({
            title: "Email inválido!",
            text: "Digite um email válido",
            icon: "warning",
            background: "#0f0f1a",
            color: "#fff"
        })
        return 
    }
    
    if(nome === "" || email === "" || senha === ""){
        Swal.fire({
            title: "Erro!",
            text: "Todos os botões devem ser preenchidos!",
            icon: "error",
            background: "#0f0f1a",
            color: "#fff",
            confirmButtonColor: "#7c3aed"
        })
        return
    }

    

    if(senha.length < 6){
        Swal.fire({
            title: "Erro!",
            text: "A senha deve ter pelo menos 6 caracteres",
            icon: "error",
            background: "#0f0f1a",
            color: "#fff",
            confirmButtonColor: "#7c3aed"
        })
        return
    }

    if (senha != repetirSenha)
    {
        Swal.fire({
            title: "Erro!",
            text: "As senhas devem ser iguais!",
            icon: "error",
            background: "#0f0f1a",
            color: "#fff",
            confirmButtonColor: "#7c3aed"
        })
        return
    }
    
    localStorage.setItem("email", email)
    localStorage.setItem("senha", senha)

    Swal.fire({
        title: "Sucesso!",
        text: "Conta criada com sucesso 🎉",
        icon: "success",
        background: "#0f0f1a",
        color: "#fff",
        confirmButtonColor: "#7c3aed"
    }).then(() => {
        window.location.href = "login.html"
    })
})