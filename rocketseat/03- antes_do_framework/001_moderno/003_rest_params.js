// Rest params (...) permite representar um número indefinido de argumentos como um array

function values(...rest) {
    // Mostra a quantidade de parâmetros
    console.log(rest.length)

    // Exibindo o conteúdo do array
    console.log(...rest)

    // Exibe o conteúdo do rest que é um array
    console.log(rest)
}

values(2, 1, 3, 4)