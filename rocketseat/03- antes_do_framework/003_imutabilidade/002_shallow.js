// Shallow Copy (cópia superficial): não pega os itens aninhados

const htmlCourse = {
    course: "HTML",
    students: [{name: "Natan", email: "natan@email.com"}]
}

/* 
const jsCourse = {
    ...htmlCourse,
    course: "JavaScript"
} */

// Vai modificar o htmlCourse também students é uma referência e não uma cópia
// jsCourse.students.push({ name: "João", email: "joao@email.com" })

// Deep Copy (cópia profunda)
const jsCourse = {
    ...htmlCourse,
    course: "JavaScript",
    students: [...htmlCourse.students, { name: "Maria", email: "maria@email.com"}]
}

jsCourse.students.push({ name: "João", email: "joao@email.com" })

console.log(htmlCourse, jsCourse)
