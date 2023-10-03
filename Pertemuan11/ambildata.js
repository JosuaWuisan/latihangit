// Async Await Fetch
async function ambilDataUser() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  console.log(data.data);
}
ambilDataUser1();

function ambilDataUser1() {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
    });
}
ambilDataUser1();
