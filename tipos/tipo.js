"use strict";
// string
var nome = 'Patrick';
console.log(nome);
// numbers
var idade = 27;
console.log(idade);
// boolean
var sabeTypescript = false;
console.log(sabeTypescript);
// array 
var hobbies = ["cozinhar", "praticar Esportes"];
console.log(hobbies[0]);
// tuplas
var endereco = ["Av principal", 99];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor["Cinza"] = "CINZA";
    Cor["Verde"] = "VERDE";
    Cor["Azul"] = "AZUL";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
