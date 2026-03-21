const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", function(event){
        
    event.preventDefault()

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const emailSalvo = localStorage.getItem("email")
    const senhaSalva = localStorage.getItem("senha")

    if(email === emailSalvo && senha === senhaSalva){

        alert("Login realizado!")

        window.location.href = "index.html"

    }else{

        alert("Email ou senha incorretos")

    }

})