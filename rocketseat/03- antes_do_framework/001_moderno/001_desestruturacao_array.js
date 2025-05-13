// destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas

const data = ["Natan Almeida", "natan@email.com"]

// Desestruturando array
const [username, email] = data
console.log(`Nome: ${username}`)
console.log(`Email: ${email}`)

const fruits = ["Qualquer coisa", "Apple", "Orange"]

// Desestruturar somente o primeiro
const [banana] = fruits
console.log(banana);

// Ignorando o primeiro na desestruturação
const [_, apple] = fruits
console.log(apple);

// Ignorando o primeiro e o segundo na desestruturação
const [,,orange] = fruits
console.log(orange);
