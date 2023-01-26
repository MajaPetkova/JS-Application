const apiUrl = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser();
async function getUser(user) {
  const res = await fetch(apiUrl + user);
  const data = await res.json();
  console.log(data);

    createUserCard(data);
}

function createUserCard(user) {
  const cardHtml = `
 <div class="card">
   <div class="img-container">
       <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
   </div>
     <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
      <ul class="info">
       <li><strong>Followers:</strong> ${user.followers}</li>
       <li><strong>Following:</strong> ${user.following}</li>
       <li><strong>Repos:</strong> ${user.public_repos}</li>
      </ul>
    </div>
   </div>
   `;
  main.innerHTML = cardHtml;
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    user.value = "";
  } else {
    alert("Please enter a user");
  }
});
