const consultaButton = document.querySelector(".container button");
const consulta = document.querySelector("[data-consulta]");
const titulo = document.querySelector(".titulo")
const tituloResultado = document.querySelector(".titulo-resultado");

function consultaEndereco() {
    let cep = document.querySelector('#cep').value;

    if (cep.length !== 8) {
        alert('CEP Inválido!');
        return
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response) {
        response.json().then(mostrarEndereco)
    });
}

function mostrarEndereco(dados) {
    let erro = document.querySelector('#erro');
    let logradouro = document.querySelector('#logradouro');
    let complemento = document.querySelector('#complemento');
    let bairro = document.querySelector('#bairro');
    let localidade = document.querySelector('#localidade');
    
    if (dados.erro) {
        erro.innerHTML = 'Não foi possível localizar endereço!';
    } else {
        logradouro.innerHTML = `Endereço: ${dados.logradouro}`;
        complemento.innerHTML = `Complemento: ${dados.complemento}`;
        bairro.innerHTML = `Bairro: ${dados.bairro}`;
        localidade.innerHTML = `Cidade: ${dados.localidade}-${dados.uf}`;
    }
}

// consultaButton.addEventListener("click", ()=>{
//     consulta.style.display = "none";
//     consultaButton.style.display = "none";
//     titulo.style.display = "none";
//     tituloResultado.style.display = "block";
// });