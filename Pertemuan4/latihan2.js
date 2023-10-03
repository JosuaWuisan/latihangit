// //USING CALLBACK FUNCTION
// function terimaAngka(terimaAngka, serimaAngka, callback) {
//   // Membandingkan kedua angka menggunakan callback function
//   let hasil = callback(terimaAngka, serimaAngka);
//   return hasil;
// }

// // Definisi callback function untuk membandingkan angka
// let bandingkanAngka = function (angka1, angka2) {
//   return angka1 >= angka2 ? angka1 : angka2;
// };

// // Panggil fungsi dengan nilai angka dan callback function
// let angkaPertama = 30;
// let angkaKedua = 40;
// let hasil = terimaAngka(angkaPertama, angkaKedua, bandingkanAngka);

// console.log("Angka terbesar adalah:", hasil);

// //USING IIFE
// let angkaPertama = 10;
// let angkaKedua = 20;

// let hasil = (function (terimaAngka, serimaAngka) {
//   // Membandingkan kedua angka dan mengembalikan nilai terbesar
//   return terimaAngka >= serimaAngka ? terimaAngka : serimaAngka;
// })(angkaPertama, angkaKedua);

// console.log("Angka terbesar adalah:", hasil);
