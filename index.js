function logar() {
    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Digitou = " + txtLogin + "/" + txtSenha)

    // uma vez capturadas as infos, preciso montar uma msg para enviar ao Back End

    var msgBody = {
        racf: txtLogin,
        email: txtLogin,
        senha: txtSenha
    };

    var cabecalho = {

        method: "Post",
        body: JSON.stringify(msgBody),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch("http://localhost:8088/login", cabecalho).then(resposta => trataResposta(resposta));
}

function trataResposta(resposta) {
    if (resposta.status == 200) {
        resposta.json().then(usuario => console.log(usuario));
    }
    else if (resposta.status == 401) {
        document.getElementById("msg").innerHTML = "Senha Inválida!";
    }

    else if (resposta.status == 404) {
        document.getElementById("msg").innerHTML = "Usuário Não Cadastrado";
    }

    else {
        document.getElementById("msg").innerHTML = "Erro Desconhecido";

    }
}