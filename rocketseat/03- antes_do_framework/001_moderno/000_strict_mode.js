// O strict mode (mode estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no JavaScript

"use strict"

function showMessage() {

    let personName = "Natan Almeida"

    console.log("Olá", personName);
    
}

showMessage()
class Student {
    get point() {
        return 7
    }
}

let student = new Student()
// Tenta mudar uma propriedade somente leitura
// student.point = 10

console.log(student.point);

// Tenta deletar uma propriedade de um objeto que não posso deletar
// delete window.document

// Quando passamos parâmetros duplicados
function sum(a, a, c) {
    return a + a + c
}

const result = sum(1, 3, 2) // 3 + 3 + 2 = 8
console.log(`Resultado: ${result}`)
