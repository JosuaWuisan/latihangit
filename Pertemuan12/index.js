// // console.log("Pertemuan12");

// // //Clsas in Javascript

// // //object literal
// // const mobil = {
// //   transmisi: "Manual",
// //   bahanbakar: "Bensin",
// //   mesin: 1500,
// // };

// // const mobil2 = {
// //   transmisi: "Automatic",
// //   bahanbakar: "Solar",
// //   mesin: 2000,
// // };

// // console.log(mobil);

class Mobil {
  constructor(transmisi, bahanbakar, mesin) {
    this.transmisi = transmisi;
    this.bahanbakar = bahanbakar;
    this.mesin = mesin;
  }
  nyalakanMesin() {
    console.log(`Mesin ${this.transmisi} dinyalakan`);
  }
}

// const mobil1 = new Mobil("Manual", "Bensin", 1500);
// const mobil2 = new Mobil("Automatic", "Solar", 2000);

// console.log(mobil1);
// console.log(mobil2);

class Toyota extends Mobil {
  constructor(merek, warna, transmisi, bahanbakar, mesin) {
    super(transmisi, bahanbakar, mesin);
    this.merek = merek;
    this.warna = warna;
  }
}
const agya = new Toyota("Agya", "Putih", "Automatic", "Bensin", 1000);
agya.nyalakanMesin();
console.log("agya");
