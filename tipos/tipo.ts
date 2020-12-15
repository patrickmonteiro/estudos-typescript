// string
let nome : string = 'Patrick'
console.log(nome)

// numbers
let idade: number = 27
console.log(idade)

// boolean
let sabeTypescript: boolean = false
console.log(sabeTypescript)

// array 

let hobbies: string[] = ["cozinhar", "praticar Esportes"]
console.log(hobbies[0])

// tuplas
let endereco: [string, number] = ["Av principal", 99]
console.log(endereco)

// enums

enum Cor {
  Cinza = 'CINZA',
  Verde = 'VERDE',
  Azul = 'AZUL'
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019}
console.log(carro)
