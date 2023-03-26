
//Evento click do botão
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add-btn").addEventListener("click", function () {
        if (validarFormulario()) {
            adicionarDados();
        }
    });
});

// Validação de preenchimento dos campos
function validarFormulario() {
    const nome = document.getElementById("name");
    const telefone = document.getElementById("phone");
    const email = document.getElementById("email");

    let isValido = true;

    if (!nome.checkValidity()) {
        nome.reportValidity();
        isValido = false;
    }

    else if (!telefone.checkValidity()) {
        telefone.reportValidity();
        isValido = false;
    }

    else if (!email.checkValidity()) {
        email.reportValidity();
        isValido = false;
    }

    return isValido;
}

// Máscara para o phome (XX) XXXXX-XXXX
function formatarNumeroTelefone(telefone) {
    const telefoneString = telefone.toString();
    const primeiraParte = telefoneString.substring(0, 2);
    const segundaParte = telefoneString.substring(2, 7);
    const terceiraParte = telefoneString.substring(7, 11);
    
    return `(${primeiraParte}) ${segundaParte}-${terceiraParte}`;
}

//Adiciona os dados na tabela
function adicionarDados() {
    const nome = document.getElementById("name").value;
    const telefone = formatarNumeroTelefone(document.getElementById("phone").value);
    const email = document.getElementById("email").value;
    const corpoTabela = document.getElementById("table-body");

    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td>${email}</td>
    `;
    corpoTabela.appendChild(linha);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}
