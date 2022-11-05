const url = "https://fakestoreapi.com/products";
const table = document.getElementById("table-body");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((x) => {
      // console.log(x.title)
      table.innerHTML += `<tr>
    <td>${x.title}</td>
    <td>${x.description}</td>
    <td>${x.price}</td>
    <td><img src="${x.image}"/></td>
  </tr>`;
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });
