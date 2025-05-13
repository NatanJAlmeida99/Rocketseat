/**
    Objeto
        - Uma coleção de dados e/ou funcionalidades;
        - Podem ter propriedades e métodos;
*/

// Cria um objeto vazio
const obj = {}
console.log(obj);
console.log(typeof obj);

// Criar um objeto com propriedades e métodos
const user = {
    email: "natan@gmail.com",
    age: 25,
    name: {
        first_name: "Natan",
        surname: "Almeida"
    },
    address: {
        street: "Rua X",
        number: 23,
        city: "São Paulo",
        postal_code: "12345-123"
    },
    message: () => {
        console.log(`Oi ${user.name.first_name}`);
        
    }
}

// Acessando propriedades e métodos usando a notação de ponto
console.log(user.email);

// Acessando propriedades de objeto
console.log(user.name.first_name);

// Executa o método do objeto
user.message()

// Notação de colchetes
console.log(user["email"]);
