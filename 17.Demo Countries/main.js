const searchBtn= document.getElementById("search-btn");
const countryInput= document.getElementById("country-input");
searchBtn.addEventListener("click", onSearch);

function onSearch(){
    const countryName= countryInput.value ;
    const url=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    async function getCountry(){
        const res= await fetch(url)
        const data= await res.json();
        console.log(Object.entries(data[0]))
        console.log(data[0].flags.svg)
        console.log(data[0].capital)
        console.log(data[0].continents)
        console.log(data[0].languages)
    }
    getCountry()
}