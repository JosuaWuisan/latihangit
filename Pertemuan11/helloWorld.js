function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}
export default helloWorld;
// Async Await Fetch
async function ambilDataUser() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  console.log(data.data);
}
ambilDataUser1();

//fetch biasa
function ambilDataUser1() {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
    });
}
ambilDataUser1();
