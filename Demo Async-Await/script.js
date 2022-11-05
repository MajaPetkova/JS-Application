const url = `https://api.github.com/users`;

async function githubUsers() {
  try{
    const response = await fetch(url);

    if(response.ok != true){
      const error= response.json()
      throw new Error(error.message)
    }
    const data = await response.json();
    // console.log(data[3].avatar_url)
    data.forEach((x) => {
      document.getElementById('root').innerHTML +=`<div class="cards">
      <img src=${x.avatar_url} alt="">
       <h2>${x.login}</h2>
   
  </div>`
    });
  }catch(err){
    console.log(err.message)
    document.getElementById('root').textContent= err.message;
  }
}
githubUsers();
