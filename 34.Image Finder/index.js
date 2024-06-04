let accessKey = "4B75IMQ9mv-WdZrZMpukN9mZFiAYnd0FlXOd5N6hSRQ";

let searchForm = document.getElementById("searchForm");
let searchBox = document.getElementById("search-box");
let searchResult = document.getElementById("search-result");
let showMoreBtn = document.getElementById("show-more-btn");

let keyWord = "";
let page = 1;

async function searchImg() {
  keyWord = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
    searchBox.value=""
  }

  const results = data.results;
  results.map((x) => {
    const image = document.createElement("img");
    image.src = x.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = x.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);

    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImg();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImg();
});
