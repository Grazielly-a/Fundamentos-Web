var nome = window.document.getElementById('nome')
var email = window.document.getElementById('email')
var assunto = window.document.getElementById('assunto')

var nomeOk = false
var emailOk = false
var assuntoOk = false

function validarNome(){    
    let txtNome = document.getElementById('txtNome')
    if(nome.value.length < 3 ){        
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome Válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.getElementById('txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido!'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'E-mail Válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validarAssunto(){
    let txtAssunto = document.getElementById('txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'O texto é muito grande, digite no máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'; 
    }
    else{
        txtAssunto.style.display = 'none'; 
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha todos os campos antes de enviar!')
    }
}