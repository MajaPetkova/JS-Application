async function loadCommits() {
  const username = document.getElementById("username").value;
  const repoName = document.getElementById("repo").value;

  const commits = document.getElementById("commits");
  commits.innerHTML = "";

  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/commits`);
    if (response.ok == false) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    
    data.forEach(x => {
        const liElement=document.createElement('li');
        liElement.textContent= `${x.commit.author.name}: ${x.commit.message}`;
        commits.appendChild(liElement)
    })
   
} catch (error) {
    console.log("Error", error);
  }
}
