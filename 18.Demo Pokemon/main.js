window.addEventListener("load", getData);
const card = document.querySelector(".card");
const btn = document.getElementById("btn");
btn.addEventListener("click", getData);

const url = `https://pokeapi.co/api/v2/pokemon/`;

async function getData(){
    let id = Math.floor(Math.random() * 150);
    const finalUrl = url + id;
    
    const res= await fetch(finalUrl)
    const data= await res.json()
      
    onGenerate(data)
      
}

function onGenerate(data){
 
    const hp= data.stats[0].base_stat;
    const img= data.sprites.other.dream_world.front_default;
    const pokeName= data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack= data.stats[1].base_stat;
    const statDefense= data.stats[2].base_stat;
    const statSpeed= data.stats[5].base_stat;

    card.innerHTML= ` <p class="hp">
    <span>HP</span> ${hp}
</p>
<img src="${img}" alt="">
<h2 class="poke-name">${pokeName}</h2>
<div class="types">
  
</div>
<div class="stats">
    <div>
        <h3>${statAttack}</h3>
        <p>Attack</p>
    </div>
    <div>
        <h3>${statDefense}</h3>
        <p>Defense</p>
    </div>
    <div>
        <h3>${statSpeed}</h3>
        <p>Speed</p>
    </div>
</div>`
    // console.log(statAttack)
    appendTypes(data.types)
}
function appendTypes(types){
    // console.log(types)
    types.forEach(x =>{
      const span = document.createElement("SPAN")
      span.textContent = x.type.name;
      document.querySelector(".types").appendChild(span)
    //   console.log(span.textContent)
    })
}



