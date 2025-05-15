const book = {
    title: "Obejtos Imutáveis",
    category: "JavaScript",
    author: {
        name: "Natan",
        email: "natan@email.com"
    },
}

const updateBook = {
    ...book,
    title: "Criando um Front-end moderno com HTML",
    category: "html",
    type: "Programming",
}

// Original intacto
console.log(book)

// Modificado
console.log(updateBook)

// Utilizando operador de desestruração {rest operator} para remover propriedades
const { category, ...bookWithoutCategory} = book
console.log(bookWithoutCategory)
