//Menggunakan destructuring Array
const numberskan = [0, 1, 2, 3, 4, 5];
const [zero, first, ...rest] = numberskan;
console.log(zero); // 0  < Output yang dihasilkan
console.log(first); // 1 < Output yang dihasilkan
console.log(rest); // [2, 3, 4, 5] < Output yang dihasilkan

//Menggunakan destructuring Object
const person = { namep: "Ungke", ages: 23, city: "Manado" };
const { namep, ages, country = "Indonesia" } = person;
console.log(namep); // Ungke < Output yang dihasilkan
console.log(ages); // 23 < Output yang dihasilkan
console.log(country); // Indonesia < Output yang dihasilkan

//Menggunakan destructuring with Default Value
const aturanSpd = { spdLaju: 130 };
const { spdLaju = 730, widLebar = 550 } = aturanSpd;
console.log(spdLaju); // 130 < Output yang dihasilkan
console.log(widLebar); // 550 < Output yang dihasilkan

//Menggunakan destructuring with Rest Operator
const buah = ["Rambutan", "Langsat", "Lemong", "Durian"];
const [firstBuah, secondBuah, ...otherBuah] = buah;
console.log(firstBuah); // Rambutan < Output yang dihasilkan
console.log(secondBuah); // Langsat < Output yang dihasilkan
console.log(otherBuah); // [Lemong, Durian] < Output yang dihasilkan

const personInfo = {
  namep: "Ungke",
  ages: 23,
  city: "Manado",
  country: "Indonesia",
};
const { namep: personNamee, ...otherInfo } = personInfo;
console.log(personNamee); // Ungke < Output yang dihasilkan
console.log(otherInfo); // { age: 23, city: 'Manado', country: 'Indonesia' } < Output yang dihasilkan
