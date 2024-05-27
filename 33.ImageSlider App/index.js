let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.style.scrollBehavior = "smooth"
  scrollContainer.scrollLeft += e.deltaY
});
backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900;
})
nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
})