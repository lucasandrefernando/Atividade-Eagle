document.addEventListener("DOMContentLoaded", iniciarContato);

function iniciarContato() {

    const form = document.getElementById("formContato");
    if (!form) return;

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const mensagem = document.getElementById("mensagem");

    telefone.addEventListener("input", aplicarMascaraTelefone);

    form.addEventListener("submit", function (e) {

        e.preventDefault();
        limparErros();

        let valido = true;

        if (nome.value.trim().length < 3) {
            mostrarErro(nome, "Nome deve ter pelo menos 3 caracteres");
            valido = false;
        }

        if (!validarEmail(email.value)) {
            mostrarErro(email, "Email inválido");
            valido = false;
        }

        if (mensagem.value.trim().length < 10) {
            mostrarErro(mensagem, "Mensagem muito curta");
            valido = false;
        }

        if (!valido) return;

        document.getElementById("confNome").innerText = nome.value;
        document.getElementById("confEmail").innerText = email.value;
        document.getElementById("confTelefone").innerText = telefone.value || "Não informado";
        document.getElementById("confMensagem").innerText = mensagem.value;

        const modal = new bootstrap.Modal(document.getElementById("modalConfirmacao"));
        modal.show();
    });
}


function mostrarErro(campo, mensagem) {
    const grupo = campo.parentElement;
    grupo.classList.add("erro-ativo");
    grupo.querySelector(".erro").innerText = mensagem;
}

function limparErros() {
    document.querySelectorAll(".input-group-custom").forEach(grupo => {
        grupo.classList.remove("erro-ativo");
        grupo.querySelector(".erro").innerText = "";
    });
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function aplicarMascaraTelefone(e) {

    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (valor.length > 0) {
        valor = valor.replace(/^(\d*)/, "($1");
    }

    e.target.value = valor;
}

function confirmarEnvio() {

    const modalEl = document.getElementById("modalConfirmacao");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    document.getElementById("formContato").reset();

    alert("Mensagem enviada com sucesso!");
}



function mostrarErro(campo, mensagem) {
    const grupo = campo.parentElement;
    grupo.classList.add("erro-ativo");
    grupo.querySelector(".erro").innerText = mensagem;
}

function limparErros() {
    document.querySelectorAll(".input-group-custom").forEach(grupo => {
        grupo.classList.remove("erro-ativo");
        grupo.querySelector(".erro").innerText = "";
    });
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function aplicarMascaraTelefone(e) {

    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
        valor = valor.replace(/^(\d*)/, "($1");
    }

    e.target.value = valor;
}


function confirmarEnvio() {

    const modalEl = document.getElementById("modalConfirmacao");
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    document.getElementById("formContato").reset();

    alert("Mensagem enviada com sucesso!");
}



function mostrarErro(campo, mensagem) {
    const grupo = campo.parentElement;
    grupo.classList.add("erro-ativo");
    grupo.querySelector(".erro").innerText = mensagem;
}

function limparErros() {
    document.querySelectorAll(".input-group-custom").forEach(grupo => {
        grupo.classList.remove("erro-ativo");
        grupo.querySelector(".erro").innerText = "";
    });
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function aplicarMascaraTelefone(e) {

    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
        valor = valor.replace(/^(\d*)/, "($1");
    }

    e.target.value = valor;
}


function confirmarEnvio() {

    const modalEl = document.getElementById("modalConfirmacao");
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    document.getElementById("formContato").reset();

    alert("Mensagem enviada com sucesso!");
}
