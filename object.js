//Cara membuat object
//1. Object Literal

// let mahasiswa1 = {
//     nama: 'Philip',
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'Doddy',
//     energy: 12,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// }


//2. Function declaration

// function Mahasiswa(nama, energy) {
//     let mahasiswa = {}
//     mahasiswa.nama = nama
//     mahasiswa.energy = energy

//     mahasiswa.makan = function(porsi) {
//         this.energy += porsi
//         console.log(`Hallo ${this.nama}, selamat makan`)
//     }

//     mahasiswa.main = function(jam) {
//         this.energy -= jam
//         console.log(`Hallo ${this.nama} selamat main`)
//     }

//     return mahasiswa
// }

// let sandhika = Mahasiswa('Shandika', 10)
// let doddy = Mahasiswa('Doddy', 20)

//3. Consructor function
//keyword new

function Mahasiswa(nama, energy) {
    this.nama = nama
    this.energy = energy

    this.makan = function(porsi) {
        this.energy += porsi
        console.log(`Hallo ${this.nama}, selamat makan`)
    }

    this.main = function(jam) {
        this.energy -= jam
        console.log(`Hallo ${this.nama} selamat main`)
    }
}

let sandhika = new Mahasiswa('Shandika', 10)
let doddy = new Mahasiswa('Doddy', 20)
