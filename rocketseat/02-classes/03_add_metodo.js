class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    sendEmail() {
        console.log(`Email enviado para ${this.name} no endereço eletrônico ${this.email}`);
    }
}

const user = new User("Natan", "natan@email.com")
user.sendEmail()