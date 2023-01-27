const apiUrl = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("MajaPetkova");
async function getUser(username) {
  const res = await fetch(apiUrl + username);
  const data = await res.json();
  // console.log(data);

  createUserCard(data);
  getRepos(username);
}

async function getRepos(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await res.json();
  addReposToCard(data);
}

function createUserCard(user) {
  const cardHtml = `
 <div class="card">
   <div class="img-container">
       <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
   </div>
     <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio }</p>
      <ul class="info">
       <li><strong>Followers:</strong> ${user.followers}</li>
       <li><strong>Following:</strong> ${user.following}</li>
       <li><strong>Repos:</strong> ${user.public_repos}</li>
      </ul>

      <div id="repos" class="repos"></div>
    </div>
   </div>`;
  main.innerHTML = cardHtml;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 9)
    .forEach((x) => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("repo");
      repoEl.href = x.html_url;
      repoEl.target = "_blank";
      repoEl.textContent = x.name;
      reposEl.appendChild(repoEl);
    });
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  } else {
    main.innerHTML = "Please enter a GitHub username";
  }
});
