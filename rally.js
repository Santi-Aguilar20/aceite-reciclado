
const entradaLitros = document.getElementById("litros");
const botonCalcular = document.getElementById("boton-calcular");
const resultadoMes = document.getElementById("resultado-mes");
const resultadoAnio = document.getElementById("resultado-anio");
const mensaje = document.getElementById("mensaje");

function formatoLitros(cantidad) {
    return cantidad.toLocaleString("es-MX", {
        maximumFractionDigits: 2
    }) + (cantidad === 1 ? " litro" : " litros");
}

function calcularAceite() {
    const valor = entradaLitros.value.trim();
    const semanal = Number(valor);

    if (
        valor === "" ||
        !Number.isFinite(semanal) ||
        semanal < 0 ||
        semanal > 1000
    ) {
        mensaje.textContent =
            "Ingresa una cantidad válida entre 0 y 1000 litros.";
        resultadoMes.textContent = "—";
        resultadoAnio.textContent = "—";
        return;
    }

    const mensual = semanal * 4;
    const anual = semanal * 52;

    resultadoMes.textContent = formatoLitros(mensual);
    resultadoAnio.textContent = formatoLitros(anual);

    mensaje.textContent =
        "¡Listo! Estos son los resultados de tu estimación.";
}

botonCalcular.addEventListener("click", calcularAceite);

entradaLitros.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        calcularAceite();
    }
});
