const form = document.getElementById("formEndereco");

const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const numero = document.getElementById("numero");
const uf = document.getElementById("uf");


// FORMATAÇÃO AUTOMÁTICA DO CEP
cep.addEventListener("input", () => {

    let valor = cep.value.replace(/\D/g, "");

    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    cep.value = valor;
});

uf.addEventListener("input", () => {
    uf.value = uf.value.toUpperCase();
});

numero.addEventListener("input", () => {
    numero.value = numero.value.replace(/\D/g, "");
});

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const regexCep = /^(\d{5})-(\d{3})$/;

    const regexUf = /^[A-Z]{2}$/;

    if (cep.value.trim() === "") {
        alert("O campo CEP é obrigatório.");
        return;
    }

    if (!regexCep.test(cep.value)) {
        alert("CEP inválido. Use o formato 00000-000.");
        return;
    }

    if (logradouro.value.trim() === "") {
        alert("O campo Logradouro é obrigatório.");
        return;
    }

    if (logradouro.value.trim().length < 5) {
        alert("O Logradouro deve conter no mínimo 5 caracteres.");
        return;
    }

    if (numero.value.trim() === "") {
        alert("O campo Número é obrigatório.");
        return;
    }

    if (isNaN(numero.value)) {
        alert("O campo Número deve conter apenas dígitos.");
        return;
    }

    if (uf.value.trim() === "") {
        alert("O campo UF é obrigatório.");
        return;
    }

    if (!regexUf.test(uf.value)) {
        alert("UF inválida. Digite apenas 2 letras maiúsculas.");
        return;
    }

    alert("Endereço cadastrado com sucesso");

});