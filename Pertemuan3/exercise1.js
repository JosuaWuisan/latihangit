function terimaAngka(terimaAngka, serimaAngka) {
  // Membandingkan kedua angka dan mengembalikan nilai terbesar
  return terimaAngka >= serimaAngka ? terimaAngka : serimaAngka;
}

// Panggil fungsi dengan nilai angka
let angkaPertama = 10;
let angkaKedua = 11;
let hasil = terimaAngka(angkaPertama, angkaKedua);

console.log("Angka terbesar adalah:", hasil);
