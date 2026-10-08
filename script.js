const form = document.querySelector("#formCadastro");
const buscarCep = document.querySelector("#buscarCep");
const cep = document.querySelector("#cep");

// escuta o evendo do formulário
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(Object.fromEntries(
        [...form.elements]
            .filter(element => element.id)
            .map(element => [element.id, element.value])
    ));
    form.reset(); 
});

buscarCep.addEventListener("click", async function() {
    const valor = cep.value.replace(/\D/g, "");
    if (valor.length !== 8) {
        alert("Digite um CEP válido.");
        return
    } try {
        const resposta = await fetch(`https://viacep.com.br/ws/${valor}/json/`);
        const dados = await resposta.json();
    } catch (erro) {
        alert("Erro capturado: " + erro);
    }
    console.log(valor);
});