// Arrow Function (função de seta).
const showMessage1 = () => {
    console.log("Olá");
}

console.log(showMessage1);
showMessage1();

const showMessage2 = (username, email) => {
    console.log(`Olá, ${username}. Seu e-mail é: ${email}`);
}

showMessage2("Natan", "natan@email.com.br");