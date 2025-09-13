const distancia = document.getElementById('distancia');
const consumo = document.getElementById('consumo');
const preco = document.getElementById('preco');
const resultado = document.getElementById('resultado');
const botao = document.getElementById('botao');

botao.addEventListener('click', calcularPreco);

function calcularPreco() {
    let distancia_numero = Number(distancia.value);
    let consumo_numero = Number(consumo.value);
    let preco_numero = Number(preco.value);

    let valor = (distancia_numero / consumo_numero) * preco_numero;

    resultado.textContent = "O valor final é R$ " + valor.toFixed(2);
}
