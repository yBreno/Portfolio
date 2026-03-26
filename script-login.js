const loginForm = document.getElementById("login")

loginForm.addEventListener("submit", function(event) {

    event.preventDefault()

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    if(email.trim() === "" || senha.trim() === ""){
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
            text: "Digite um email válido",
            icon: "warning",
            background: "#0f0f1a",
            color: "#fff"
        })
        return 
    }

    
    const emailSalvo = localStorage.getItem("email")
    const senhaSalva = localStorage.getItem("senha")

    if(email === emailSalvo && senha === senhaSalva){
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
    } else {
        Swal.fire({
            title: "Erro!",
            text: "Email ou senha incorretos",
            icon: "error",
            background: "#0f0f1a",
            color: "#fff",
            confirmButtonColor: "#7c3aed"
        })
    }

})