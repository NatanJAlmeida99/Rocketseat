const book = {
    title: "Objetos Imutáveis",
    category: "JavaScript",
    author: {
        name: "Natan",
        email: "natan@email.com"
    }
}

// O JavaScript em si não impõe restrições à modificação dos objetos
// book.category = "HTML"

// Congela o objeto e impede a modficação
Object.freeze(book)
book.category = "CSS" // Não modifica

// Object.freeze() não impede modificações profundas em objetos aninhados (shallow freezing)
book.author.name = "João"
console.log(book)
