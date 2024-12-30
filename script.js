function validateForm(){
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value; // aqui recuoerei o valor de cada campo digitado pelo usuario.

if(name === ""|| email === ""|| message === ""){
    alert("Todos os campos são obrigatórios");
    return false; //colocamos esse return para caso esteja faltando alguma informação , nao seja feito o envio do arquivo , e retorna a pagina para usuario preencher corretamente para depois solicitar um novo envio.
}

if(name.length < 3 || name.length> 50){
    alert("O nome deve ter entre 3 e 50 caracteres");
    return false;
}

if(email.length < 5 || email.length> 50){
    alert("O e-amil deve ter entre 5 e 50 caracteres");
    return false;
}

const emailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if(!emailPatern.test(email)){
    alert("Por favor, digite um e-mail valido");
    return false;
}

return true;
}

document.getElementById("contactForm").addEventListener('submit', function(event){
    event.preventDefault();
    if(validateForm())
 {
        alert("Formulario Valido");
    }
})