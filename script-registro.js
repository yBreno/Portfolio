
const formCadastro = document.getElementById("cadastro")

formCadastro.addEventListener("submit", function(event){
    
    event.preventDefault()

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const repetirSenha = document.getElementById("repetirSenha").value.trim();
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
    
    if(nome === "" || email === "" || senha === ""|| telefone === ""){
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

    let cliente = {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone
    };

    let tabelaClientes = JSON.parse(localStorage.getItem("tabelaClientes")) || [];
    
    let emailExistente = tabelaClientes.find(c=>c.email === email);
    if (emailExistente)
    {
        Swal.fire({
            title: "Erro!",
            text: "Email ja existente!",
            icon: "error",
            background: "#0f0f1a",
            color: "#fff",
            confirmButtonColor: "#7c3aed"
        })
        return
    }

    tabelaClientes.push(cliente);

    localStorage.setItem("tabelaClientes", JSON.stringify(tabelaClientes));

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