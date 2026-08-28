console.log("Sistema iniciadoo!");

let nome = "Seu nome";
let idade = 16;
let curso = "Informática";

console.log(nome);
console.log(idade);
console.log(curso);


let alunos = ["João", "Maria", "Pedro", "bruno", "lavinia"];

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]);

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

let lista = document.getElementById("listaAlunos");

for (let i = 0; i < alunos.length; i++) {
    lista.innerHTML += `<li>${alunos[i]}</li>`;
}
